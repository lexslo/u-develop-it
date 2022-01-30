const express = require('express');
const router = express.Router();

router.use(require('./candidate-routes'));
router.use(require('./party-routes'));

module.exports = router;