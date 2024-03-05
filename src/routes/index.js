const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const animeRouter = require('./animeRouter')
const personajeRouter = require('./personajeRouter')
const powerRouter= require('./powerRouter')
const userRouter = require('./userRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/anime', animeRouter)
router.use('/personaje', personajeRouter)
router.use('/power', powerRouter )
router.use('/users', userRouter)

module.exports = router;
