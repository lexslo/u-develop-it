const express = require('express');
const router = express.Router();

router.use(require('./candidate-routes'));
router.use(require('./party-routes'));
router.use(require('./voter-routes'));

module.exports = router;