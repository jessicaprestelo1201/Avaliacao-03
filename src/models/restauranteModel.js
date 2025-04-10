import prisma from "../../prisma/client.js";

class RestauranteModel {
  getAll = async () => {
    return await prisma.restaurante.findMany();
  };

  getById = async (id) => {
    return await prisma.restaurante.findUnique({
      where: { id },
    });
  };

  create = async (description,name,price,category,ingredients) => {
    return await prisma.restaurante.create({
      data: {
        name,
        description,
        price,
        category,
        ingredients,

      },
    });
  };

  update = async (id, description, name,
    price,
    category,
    ingredients,
    imageURL,
    prepTime) => {
    try {
      const restaurante = await prisma.restaurante.update({
        where: { id },
        data: {
          description,
          name,
          price,
          category,
          ingredients,
          imageURL,
          prepTime,
        },
      });

      return restaurante;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const restauranteDeletada = await prisma.restaurante.delete({
        where: { id },
      });

      return restauranteDeletada;
    } catch (error) {
      console.log("Erro ao deletar a restaurante!", error);
      throw error;
    }
  };
}
export default new RestauranteModel();
