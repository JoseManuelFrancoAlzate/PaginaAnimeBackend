const { User } = require('../db');

const registerUser = async (name, email,password) => {
    try {
        // Crear un nuevo usuario con la contraseña en texto plano
        const newUser = await User.create({
            name,
            email,
            password
        });
        return newUser;
    } catch (error) {
        throw new Error('Error al registrar usuario: ' + error.message);
    }
};

const loginUser = async (email, password) => {
    try {
        // Buscar al usuario por su correo electrónico
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        // Comparar la contraseña proporcionada con la almacenada en texto plano
        if (password !== user.password) {
            throw new Error('Contraseña incorrecta');
        }
        return user;
    } catch (error) {
        throw new Error('Error al iniciar sesión: ' + error.message);
    }
};
const allUsers = ()=>{
    const todosLosUsuarios = User.findAll()

    return todosLosUsuarios
}
const deleteUser = async (id) => {
    try {
        // Encuentra el anime por su ID
        const user = await User.findByPk(id);
    
        // Verifica si el anime existe
        if (!user) {
          throw new Error('User not found');
        }
    
        // Elimina el anime de la base de datos
        await user.destroy();
    
        return true; // Indica que el anime se eliminó correctamente
      } catch (error) {
        throw error;
      }
};

module.exports = {allUsers, registerUser,loginUser, deleteUser}