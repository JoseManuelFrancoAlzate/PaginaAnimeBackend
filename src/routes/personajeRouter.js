const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getPersonajeHandler, postPersonajeHandler,updatePersonajeHandler, deletePersonajeHandler, idPersonajeHandler}= require('../handlers/personajeHandlers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',getPersonajeHandler)
router.post('/',postPersonajeHandler)
router.get('/:id', idPersonajeHandler)
router.put('/:id',updatePersonajeHandler)
router.delete('/:id',deletePersonajeHandler)
module.exports = router;
