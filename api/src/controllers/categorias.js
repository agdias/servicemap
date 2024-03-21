const Categoria = require('../models/Categoria')
exports.criaCategoria =  async (req, res, next) => {

    try {
        const categoria =  await Categoria.create(req.body);
        
        res.status(201).json({
            success: true,
            data: categoria
        })
    }
    catch(e) {
       console.log(e)
        res.status(500).json({
            success: false,
            data: e
        })
    }

}

exports.buscaCategorias = async (req, res, next) => {
    try {
        const categorias =  await Categoria.find();
        res.status(200).json({
            success: true,
            data: categorias
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success: false,
            data: error
        })
    }
}