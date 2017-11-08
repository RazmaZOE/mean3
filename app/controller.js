var Persona = require("./modelo/persona");

//Obtener todos los objetos Persona de la BD:
exports.getPersona = function (req, res){
    Persona.find(
        function(err, persona){
            if(err){
                res.send(err);
            }
            else{
                res.json(persona); //Devuelve todas las personas en JSON
            }
        }
    );
}

//Guardar un objeto Persona en BD:
exports.setPersona = function (req, res){
    //Creo el objeto Persona:
    Persona.create(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad
        },
        function(err, persona) {
            if(err){
                res.send(err);
            }
            else{
                //Obtiene y devuelve todas las personas tras crear una de ellas:
                Persona.find(function(err, persona) {
                    if(err){
                        res.send(err);
                    }
                    else{
                        console.log(req.body);
                        res.json(persona);
                    }
                });
            }
        }
    );
}

//Modificar un objeto Persona de la BD:
exports.updatePersona = function(req, res) {
    Persona.update({
        _id : req.params.persona_id
    },
    {
        $set:{
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            edad : req.body.edad
        }
    },
    function (err, persona) {
        if(err){
            res.send(err);
        }
        else{
            //Obtiene y devuelve todas las personas tras crear una de ellas:
            Persona.find(function(err, persona) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(persona);
                }
            });
        }
    });
}

//Eliminar un objeto Persona de la BD:
exports.removePersona = function(req, res) {
    Persona.remove({
        _id : req.params.persona_id
    },
    function (err, persona) {
        if(err){
            res.send(err);
        }
        else{
            //Obtiene y devuelve todas las personas tras crear una de ellas:
            Persona.find(function(err, persona) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(persona);
                }
            });
        }
    });
}