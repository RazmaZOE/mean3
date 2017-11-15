var mainApp = angular.module("mainApp", []);

mainApp.controller("mainController", function ($scope, $http) {
    console.log("Entró a controller MainController");
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.selected = false;

    //Obtener todos los datos de la BD:
    $http.get("/api/persona/").then(successCallback, errorCallback);

    function successCallback(response){
        console.log("Cargó personas de la base");
        $scope.personas = response.data;
    }
    function errorCallback(response){
        console.log("Error: " + response.data);
    }

    //Función para registrar una persona:
    $scope.registrarPersona = function() {
        $http.post("/api/persona", $scope.newPersona).then(successCallback, errorCallback);

        function successCallback(response){
            $scope.newPersona = {}; //Borra los datos del formulario
            $scope.newPersona = response.data;
            $scope.personas = response.data;
            console.log("Registro correcto");
        }
        function errorCallback(response){
            console.log("Error: " + response.data);
        }
    };

    //Función para editar los datos de una persona:
     $scope.modificarPersona = function(newPersona) {
         $http.put("/api/persona/" + $scope.newPersona._id, $scope.newPersona).then(successCallback, errorCallback);

         function successCallback(response){
            $scope.newPersona = {}; //Borra los datos del formulario
            $scope.personas = response.data;
            $scope.selected = false;
         }
         function errorCallback(response){
            console.log("Error: " + response.data);
        }
    };

    //Función que borra una persona conociendo su Id:
    $scope.borrarPersona = function(newPersona) {
        $http.delete("/api/persona/" + $scope.newPersona._id).then(successCallback, errorCallback);

        function successCallback(response){
            $scope.newPersona = {}; //Borra los datos del formulario
            $scope.personas = response.data;
            $scope.selected = false;
        }
        function errorCallback(response){
            console.log("Error: " + response.data);
        }
    };

    //Función para seleccionar a la persona:
    $scope.selectPerson = function(persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };
});