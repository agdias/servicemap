const express = require('express');
const router = express.Router();
const {
    criaCategoria, 
    buscaCategorias,
} = require('../controllers/categorias')


router.route('/')
  
  .post(criaCategoria)
  .get(buscaCategorias)

module.exports = router;

