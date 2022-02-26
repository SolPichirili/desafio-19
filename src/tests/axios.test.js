const axios = require('axios');
const logger = require('../utils/winston');

const getProducts = () => {
    return axios.get('http://localhost:8080/api/productos')
        .then(({ status, data }) => {
            logger.info(status);
            logger.info(data);
        })
        .catch(({ message }) => logger.error(message));
}


const postProduct = () => {
    return axios.post('http://localhost:8080/api/productos', {
        name: 'torta test',
        description: 'es una prueba',
        code: 111,
        photo: 'http://cualquierfoto.com',
        price: '450',
        stock: '1'
    })
        .then(({ status, data }) => {
            logger.info(status);
            logger.info(data);
        })
        .catch(({ message }) => logger.error(message));
}

const updateProduct = () => {
    return axios.put('http://localhost:8080/api/productos/61e623021def815390d79094',
        {
            description: 'ESTO ES UNA PRUEBA'
        })
        .then(({ status, data }) => {
            logger.info(status);
            logger.info(data);
        })
        .catch(({ message }) => logger.error(message));
}

const deleteProduct = () => {
    return axios.delete('http://localhost:8080/api/productos/621035ae1670fa6489ad8c77')
        .then(({ status, data }) => {
            logger.info(status);
            logger.info(data);
        })
        .catch(({ message }) => logger.error(message));
}

Promise.all([getProducts(), postProduct(), updateProduct(), deleteProduct()])
    .then(function (results) {
        const products = results[0];
        const newProduct = results[1];
        const modifiedProduct = results[2];
        const eliminatedProduct = results[3];
    });

