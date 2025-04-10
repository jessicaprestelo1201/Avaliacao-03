import restauranteModel from "../models/restauranteModel.js";

class RestauranteController {
  getAll = async (req, res) => {
    try {
      const restaurantes = await restauranteModel.getAll();
      res.json(restaurantes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar restaurantes" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const restaurante = await restauranteModel.getById(Number(id));

      if (!restaurante) {
        return res.status(404).json({ erro: "Restaurante não encontrado!" });
      }

      res.json(restaurante);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar restaurante!" });
    }
  };
  create = async (req, res) => {
    const { name,
      description,
      price,
      category,
      ingredients, } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!name || !description || !price || !category || !ingredients) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novaRestaurante = await restauranteModel.create(name,description,price,category,ingredients);
      res.status(201).json(novaRestaurante);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Restaurante" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { description, name, price, category, ingredients, imageURL, prepTime } = req.body;

    try {
      const restauranteAtualizada = await restauranteModel.update(
        Number(id),
        description,
        name,
        price,
        category,
        ingredients,
        imageURL,
        prepTime
      );

      if (!restauranteAtualizada) {
        return res.status(404).json({ erro: "Restaurante não encontrado!" });
      }

      res.json(restauranteAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar restaurante!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await restauranteModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir tarefa!" });
    }
  };
}
export default new RestauranteController();
