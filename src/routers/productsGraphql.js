const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { getAll, getById, save, update, deleteById } = require('../controllers/productsGraphql');

const productsSchema = buildSchema(`
type Product {
    _id: ID!
    name: String
    description: String
    code: Int
    photo: String
    price: String
    stock: String
}
type Query{
    getAll: [Product]
    getById(_id: ID!): Product
}
type Mutation{
    save(
        name: String!
        description: String!
        code: Int!
        photo: String!
        price: String!
        stock: String!
    ): Product,
    update(
        _id: ID!,
        name: String
        description: String
        code: Int
        photo: String
        price: String
        stock: String
        ): Product,
    deleteById(_id: ID!): Product
}`);

const graphqlRouter = graphqlHTTP({
    schema: productsSchema,
    rootValue: {
        getAll,
        getById,
        save,
        update,
        deleteById
    },
    graphiql: true
})

module.exports = graphqlRouter;