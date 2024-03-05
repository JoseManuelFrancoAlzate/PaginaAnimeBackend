
const { registerUser, loginUser, allUsers, deleteUser} = require('../controllers/usersControllers');

const registerUserHandler = async (req, res) => {
  try {
    const { name,email, password } = req.body;
    const newUser = await registerUser(name,email,password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    
    // Generar token JWT

    res.status(200).json({ user, password });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getUsersHandler = async(req,res)=>{
    try {
        const todosLosUsuarios = await allUsers();
        res.status(200).json(todosLosUsuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deleteUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteUser(id);
    if (result) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

module.exports = { getUsersHandler, registerUserHandler,loginUserHandler, deleteUserHandler}