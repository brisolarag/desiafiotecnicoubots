const express = require('express')
const router = express.Router()

const filmesController = require('./controllers/filmesController')
const filmesMiddlewares = require('./middlewares/filmesMiddleware')

router.get('/filmes', filmesController.getAll)
router.post('/add', filmesMiddlewares.validateBody, filmesController.createFilme)
router.delete('/filmes/:id',  filmesController.deleteFilme)
router.put('/filmes/:id',  filmesMiddlewares.validateBody, filmesController.updateFilme)
router.put('/filmes/avaliar/:id',  filmesMiddlewares.validateAvaliacao, filmesController.avaliarFilme)
router.get('/filmes/naoavaliados', filmesController.naoAvaliado)

module.exports = router