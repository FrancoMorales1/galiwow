import express from "express";
import Titulo from "../db/models/Titulo.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const titulo = await Titulo.find();
    res.json(titulo);
  } catch (error) {
    console.error("Error al obtener los titulos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
