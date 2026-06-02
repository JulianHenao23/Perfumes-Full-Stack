import express from "express";
import Perfume from "../models/perfumesModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.status(200).json(perfumes);
  } catch (error) {
    console.error("Error al obtener los perfumes", error);
    res.status(500).json({ error: "Error de servidor" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const perfume = await Perfume.findById(req.params.id);
    if (!perfume) return res.status(404).json({ error: "Perfume no encontrado" });
    res.status(200).json(perfume);
  } catch (error) {
    console.error("Error al obtener el perfume por id", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const perfume = new Perfume({ title, description, imageUrl });
    const savePerfume = await perfume.save();
    res.status(201).json({ message: "Perfume creado correctamente", perfume: savePerfume });
  } catch (error) {
    console.error("Error al crear el perfume", error);
    res.status(500).json({ error: "Error de servidor" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const updatePerfume = await Perfume.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl },
      { new: true }
    );
    if (!updatePerfume) return res.status(404).json({ error: "Perfume no actualizado correctamente" });
    res.status(200).json({ message: "Perfume actualizado correctamente", perfume: updatePerfume });
  } catch (error) {
    console.error("Error actualizar perfume", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletePerfume = await Perfume.findByIdAndDelete(req.params.id);
    if (!deletePerfume) return res.status(404).json({ error: "Perfume no encontrado" });
    res.status(200).json({ message: "Perfume eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar perfume", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;