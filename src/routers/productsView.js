const express = require('express');

const productsGraphqlRouter = express.Router();

productsGraphqlRouter.get('/', (req, res)=>{
    res.render('../src/views/pages/products.ejs')
});

module.exports = productsGraphqlRouter;