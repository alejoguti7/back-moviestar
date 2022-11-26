const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeliculasSchema = new Schema({
  id_pelicula: { type: String, required: true, max: 50 },
  titulo: { type: String, required: true, max: 100 },
  duracion: { type: String, required: true, max: 50 },
  genero: { type: String, required: true, max: 100 },
  director: { type: String, required: false, max: 100 },
  precio: { type: String, required: true, max: 50 },
});

module.exports = mongoose.model("peliculas", PeliculasSchema);
