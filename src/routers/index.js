const express = require('express');

const router = express.Router();

const authRouter = require('./auth');
const productsRouter = require('./products');
const cartRouter = require('./cart');
const multerRouter = require('./multer');
const graphqlRouter = require('./productsGraphql');
const productsGraphqlRouter = require('./productsView');


router.use(authRouter);
router.use(multerRouter);
router.use('/api/productos', productsRouter);
router.use('/api/carrito', cartRouter);
router.use('/api/productosGraphql', graphqlRouter);
router.use('/api/productosVista', productsGraphqlRouter);

module.exports = router;