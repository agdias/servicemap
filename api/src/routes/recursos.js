const express = require('express');
const router = express.Router();
const {
  criaRecurso,
} = require('../controllers/recursos')

router.route('/')
  .post(criaRecurso)

  module.exports = router;