const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getUsersHandler,registerUserHandler, loginUserHandler, deleteUserHandler}= require('../handlers/usersHandlers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',getUsersHandler)
router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);
router.delete('/:id', deleteUserHandler)
module.exports = router;
 