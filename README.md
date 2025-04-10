## Proposta da atividade - Atividade Avaliativa 3

Desenvolvimento de API Backend com CRUD Completo e Prisma ORM

## Passo a Passo da Configuração

### 1. Primeiro, utilizei o tamplate node-back-banco do Professor Felipe

### 2.Passos Após Git Clone utilizando o template node-back-banco do Professor Felipe

Instalei as dependências do projeto:
npm install

Criei o arquivo .env com a variável DATABASE_URL apontando para o banco de dados desejado.
DATABASE_URL="file:./dev.db"

Executei as migrações:
npx prisma migrate dev

### 3. Criando o arquivo schema.prisma

O Prisma já criou o arquivo `prisma/schema.prisma`. O modifiquei conforme as informações da minha tabela:


model Restaurante {
  id        Int     @id @default(autoincrement())
  name     String
  description String
  price     Int
  category  String
  ingredients String
  imageURL  String?
  prepTime  Float?
  createdAt DateTime @default(now())
  updateAt  DateTime @updatedAt

  @@map("restaurantes")
}



## 4. Atualizando as rotas

implementei a nova rota `getById` no arquivo de rotas:

```javascript
import express from "express";
import restauranteController from "../controllers/restauranteController.js";
const router = express.Router();
router.get("/", restauranteController.getAll);
router.get("/:id", restauranteController.getById);
router.post("/", restauranteController.create);
router.put("/:id", restauranteController.update);
router.delete("/:id", restauranteController.delete);

export default router;
```

## Exemplo de requisições para cada rota

- Get All - http://localhost:4000/restaurantes
- Get By Id - http://localhost:4000/restaurantes/1
- Post - http://localhost:4000/restaurantes
- Put - http://localhost:4000/restaurantes/1
- Delete - http://localhost:4000/restaurantes/1


## Get All - http://localhost:4000/restaurantes

Resposta:

[
  {
    "id": 2,
    "name": "teste",
    "description": "teste",
    "price": 20,
    "category": "teste",
    "ingredients": "teste",
    "imageURL": null,
    "prepTime": null,
    "createdAt": "2025-04-10T18:16:41.636Z",
    "updateAt": "2025-04-10T18:16:41.636Z"
  }
]

## Get By Id - http://localhost:4000/restaurantes/1

Resposta:
{
  "id": 2,
  "name": "teste",
  "description": "teste",
  "price": 20,
  "category": "teste",
  "ingredients": "teste",
  "imageURL": null,
  "prepTime": null,
  "createdAt": "2025-04-10T18:16:41.636Z",
  "updateAt": "2025-04-10T18:16:41.636Z"
}

## Post - http://localhost:4000/restaurantes
Body: 
{
  
"name":"teste",
"description":"teste",
"price": 20,
"category": "teste",
"ingredients":"teste"

}

Resposta:
{
  "id": 3,
  "name": "teste",
  "description": "teste",
  "price": 20,
  "category": "teste",
  "ingredients": "teste",
  "imageURL": null,
  "prepTime": null,
  "createdAt": "2025-04-10T18:16:41.636Z",
  "updateAt": "2025-04-10T18:16:41.636Z"
}

## Put - http://localhost:4000/restaurantes/1
Body:
{
  
"name":"teste",
"description":"teste",
"price": 20,
"category": "teste",
"ingredients":"teste",
"imageURL":"teste",
"prepTime":20

}

Resposta:
{
  "id": 2,
  "name": "teste",
  "description": "teste",
  "price": 20,
  "category": "teste",
  "ingredients": "teste",
  "imageURL": "teste",
  "prepTime": 20,
  "createdAt": "2025-04-10T18:16:41.636Z",
  "updateAt": "2025-04-10T18:16:41.636Z"
}

## Delete - http://localhost:4000/restaurantes/1
 Body:
  {
  
"name":"teste",
"description":"teste",
"price": 20,
"category": "teste",
"ingredients":"teste"

}

Resposta:
{
  "message": "Restaurante deletado com sucesso!"
}

## Tecnologias utilizadas
- Express
- Prisma
- Node.js
- SQLite
