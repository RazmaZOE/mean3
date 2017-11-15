var Persona = require("./modelo/persona");
var Controller = require("./controller");

module.exports = function(app) {
    //Devolver todas las personas:
    app.get("/api/persona", Controller.getPersona);

    //Crear una Persona nueva:
    app.post("/api/persona", Controller.setPersona);

    //Modificar datos de una Persona:
    app.put("/api/persona/:persona_id", Controller.updatePersona);

    //Borrar una Persona:
    app.delete("/api/persona/:persona_id", Controller.removePersona);

    //Application
    app.get("*", function(req, res) {
        console.log("Mando vista general *")
        res.sendFile("index.html", { root: "./angular/"}); //Carga única de la vista
    });
};