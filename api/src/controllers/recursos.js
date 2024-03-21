const Recurso = require('../models/Recurso')

exports.criaRecurso = async (req, res, next) => {
    try {
        const recurso = Recurso.create(req.body)
        res.status(201).json({
            success: true,
            data: recurso
        })
    }
    catch (error) {
        res.status(404).json({
            success: false,
            data: error
        })
    }
   
}