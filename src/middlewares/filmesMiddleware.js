const validateBody = (req, res, next) => {
    const { body } = req

    if ((body.title === undefined) || (body.title === "")) {
        return res.status(400).json({
            error:true,
            message:"O filme deve ter um titulo"
        })
    }
    if ((body.categoria === undefined) || (body.categoria === "")) {
        return res.status(400).json({
            error:true,
            message:"O filme deve ter uma categoria"
        })
    }
    if (body.avaliacao !== undefined) {
        if ((body.avaliacao < 1) || (body.avaliacao > 5)) {
            return res.status(400).json({
                error:true,
                message:"A avaliacao do filme deve ser entre 1 e 5"
            })
        }
    }

    next()
}

const validateAvaliacao = (req, res, next) => {
    const { body } = req
    if (body.avaliacao !== undefined) {
        if ((body.avaliacao < 1) || (body.avaliacao > 5)) {
            return res.status(400).json({
                error:true,
                message:"A avaliacao do filme deve ser entre 1 e 5"
            })
        }
    }
    next()
}



module.exports = {
    validateBody,
    validateAvaliacao
}