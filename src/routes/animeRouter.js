const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getAnimeHandler, postAnimeHandler, idAnimeHandler, updateAnimeHandler, deleteAnimeHandler}= require('../handlers/animeHandlers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',getAnimeHandler)
router.post('/', postAnimeHandler)
router.get('/:id',idAnimeHandler)
router.put('/:id', updateAnimeHandler)
router.delete('/:id',deleteAnimeHandler)

module.exports = router;

