const supertest = require('supertest')('http://localhost:8080');
const expect = require('chai').expect;

describe('Test api rest full', () => {
    let productId;

    describe('GET', () => {
        it('Should return all the products', async () => {
            let response = await supertest.get('/api/productos')
            expect(response.status).to.eql(200);
        })
    })

    describe('POST', () => {
        it('Shoul add a new product to the list', async () => {
            let product = {
                name: 'empanada test',
                description: 'es una prueba de mocha',
                code: 222,
                photo: 'http://cualquierfoto.com',
                price: '100',
                stock: '3'
            }

            let response = await supertest.post('/api/productos').send(product)
            expect(response.status).to.eql(200);

            const newProduct = response.body.data
            expect(newProduct).to.include.keys('_id', 'name', 'description', 'code', 'photo', 'price', 'stock')
            expect(newProduct.name).to.eql(product.name)
            expect(newProduct.description).to.eql(product.description)
            expect(newProduct.code).to.eql(product.code)
            expect(newProduct.photo).to.eql(product.photo)
            expect(newProduct.price).to.eql(product.price)
            expect(newProduct.stock).to.eql(product.stock)

            productId = newProduct._id;
        })

        describe('PUT', () => {
            it('Should change a key in the chosen product', async () => {
                let data = {
                    price: '600'
                }

                let response = await supertest.put(`/api/productos/${productId}`).send(data)
                expect(response.status).to.eql(200)

                let modification = response.body.data
                expect(modification.price).to.eql(data.price)
            })
        })

        describe('DELETE', ()=> {
            it('Should eliminate the chosen product', async()=>{
                let response = await supertest.delete(`/api/productos/${productId}`)
                expect(response.status).to.eql(200)
            })
        })
    })
})