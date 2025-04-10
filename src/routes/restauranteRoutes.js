import express from "express";
import restauranteController from "../controllers/restauranteController.js";
const router = express.Router();
router.get("/", restauranteController.getAll);
router.get("/:id", restauranteController.getById);
router.post("/", restauranteController.create);
router.put("/:id", restauranteController.update);
router.delete("/:id", restauranteController.delete);
export default router;
