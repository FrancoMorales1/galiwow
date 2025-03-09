import express from "express";
import Personaje from "../db/models/Personaje.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find();
    res.json(personajes);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
