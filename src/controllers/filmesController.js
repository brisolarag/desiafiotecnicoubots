const filmesModel = require('../models/filmesModel')

const getAll = async (req, res) => {

    const filmes = await filmesModel.getAll()

    return res.status(200).json(filmes)
}

const createFilme = async (req, res) => {

    const createdFilme = await filmesModel.createFilme(req.body)


    return res.status(201).json({
        error:false,
        message:"Filme criado com sucesso",
        ID: createdFilme
    })
}

const deleteFilme = async (req, res) => {
    const { id } = req.params
    await filmesModel.deleteFilme(id)
    return res.status(204).json()
}

const updateFilme = async (req, res) => {
    const { id } = req.params
    await filmesModel.updateFilme(id, req.body)
    return res.status(204).json()
}

const avaliarFilme = async (req, res) => {
    const { id } = req.params
    await filmesModel.avaliarFilme(id, req.body)
    return res.status(204).json()
}

const naoAvaliado = async (req, res) => {
    const filmes = await filmesModel.naoAvaliado()
    return res.status(200).json(filmes)
}







module.exports = {
    getAll,
    createFilme,
    deleteFilme,
    updateFilme,
    avaliarFilme,
    naoAvaliado
}