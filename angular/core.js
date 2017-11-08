angular.module("MainApp", [])

function mainController ($scope, $http) {
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.selected = false;

    //Obtener todos los datos de la BD:
    $http.get("/api/persona/").success(function(data) {
        $scope.personas = data;
    })
    .error(function(data) {
        console.log("Error: " + data);
    });

    //Función para registrar una persona:
    $scope.registrarPersona = function() {
        $http.post("/api/persona/", $scope.newPersona)
        .success(function(data) {
            $scope.newPersona = {}; //Borra los datos del formulario
            $scope.newPersona = data;
        })
        .error(function(data) {
            console.log("Error: " + data);
        });
    };

    //Función para editar los datos de una persona:
    $scope.modificarPersona = function(newPersona) {
        $http.put("/api/persona/" + $scope.newPersona._id, $scope.newPersona)
        .success(function(data) {
            $scope.newPersona = {}; //Borra los datos del formulario
            $scope.personas = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log("Error: " + data);
        });
    };

    //Función que borra una persona conociendo su Id:
    $scope.borrarPersona = function(newPersona) {
        $http.delete("/api/persona/" + $scope.newPersona._id)
        .success(function(data) {
            $scope.newPersona = {};
            $scope.personas = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log("Error: " + data);
        });
    };

    //Función para seleccionar a la persona:
    $scope.selectPerson = function(persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };
}