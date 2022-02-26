const logger = require('../utils/winston');
const PersistenceFactory = require('../daos/index');
const { getPersistence } = require('../utils/getPersistence');

const factory = PersistenceFactory.getInstance();

const ProductDao = factory.getPersistenceMethod(getPersistence()).productsDao;

const getAll = async () => {
    logger.info(`MESSAGE: Proceso exitoso`);
    const productList = await ProductDao.getAll();
    return productList;
}

const getById = async (id) => {
    logger.info(`MESSAGE: Proceso exitoso`);
    const productById = await ProductDao.getById(id);
    return productById;
}

const save = async (newProduct) => {
    logger.info(`MESSAGE: Proceso exitoso`);
    const newList = await ProductDao.save(newProduct);
    return newList;
}

const update = async (id, newProduct) => {
    logger.info(`MESSAGE: Proceso exitoso`);
    const {name, description, code, photo, price, stock} = newProduct;
    const updatedProduct = await ProductDao.update(id, {name, description, code, photo, price, stock});
    return updatedProduct;
}

const deleteById = async (id) => {
    logger.info(`MESSAGE: Proceso exitoso`);
    const newList = await ProductDao.deleteById(id);
    return newList;
}

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteById
}