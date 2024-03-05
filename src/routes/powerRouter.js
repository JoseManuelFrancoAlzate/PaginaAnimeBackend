const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getPowerHandler, postPowerHandler, uptadePowerHandler}= require('../handlers/powerHandler')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',getPowerHandler)
router.post('/', postPowerHandler)
router.put('/:id',uptadePowerHandler)
module.exports = router;
