const { Router } = require('express')
const ProdutoController = require('../Controlles/ProdutoController')


const routes = Router()

routes.get('/Produto', ProdutoController.index)
routes.post('/produto', ProdutoController.create)


module.exports = routes