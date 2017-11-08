var mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var personaSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: String
});

module.exports = mongoose.model("Persona", personaSchema);