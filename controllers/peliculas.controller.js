const Pelicula = require("../models/peliculas.model.js");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let pelicula = new Pelicula({
    id_pelicula: req.body.id_pelicula,
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    genero: req.body.genero,
    director: req.body.director,
    precio: req.body.precio,
  });

  pelicula.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar la pelicula");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "la pelicula se guardo correctamente");
    res.json(response);
  });
};
exports.find = function (req, res) {
  Pelicula.find(function (err, peliculas) {
    res.json(peliculas);
  });
};
exports.findOne = function (req, res) {
  Pelicula.findOne({ _id: req.params.id }, function (err, pelicula) {
    res.json(pelicula);
  });
};
exports.update = function (req, res) {
  let pelicula = {
    id_pelicula: req.body.id_pelicula,
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    genero: req.body.genero,
    director: req.body.director,
    precio: req.body.precio,
  };

  Pelicula.findByIdAndUpdate(req.params.id, { $set: pelicula }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar la pelicula");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "La pelicula se modifico correctamente");
    res.json(response);
  });
};
exports.remove = function (req, res) {
  Pelicula.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar la pelicula");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "La pelicula fue eliminada correctamente");
    res.json(response);
  });
};
