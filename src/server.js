import express from "express";
import restauranteRoutes from "./routes/restauranteRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/restaurantes", restauranteRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
