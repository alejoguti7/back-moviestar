const express = require("express")
const router = express.Router()
const peliculasController = require("../controllers/peliculas.controller")

router.post("/", peliculasController.create)
router.get("/", peliculasController.find)
router.get("/:id", peliculasController.findOne)
router.put("/:id", peliculasController.update)
router.delete("/:id", peliculasController.remove)

module.exports = router