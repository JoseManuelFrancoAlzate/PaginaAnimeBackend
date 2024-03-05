const {Power} = require('../db')

const allPowers = ()=>{
    const todosLosPoderes = Power.findAll()

    return todosLosPoderes
}


const createPowers=(name,image,description)=>{
    const crearPoderes = Power.create({name,image,description})

    return crearPoderes
}

const deletePower = async (id) => {
    try {
      // Encuentra el anime por su ID
      const power = await Power.findByPk(id);
  
      // Verifica si el anime existe
      if (!power) {
        throw new Error('Power not found');
      }
  
      // Elimina el anime de la base de datos
      await power.destroy();
  
      return true; // Indica que el anime se eliminó correctamente
    } catch (error) {
      throw error;
    }
  };

    const uptadePower = async (id, name, description, image) => {
      try {
        // Encuentra el anime por su ID
        const power = await Power.findByPk(id);
      
        // Verifica si el anime existe
        if (!power) {
          throw new Error('Anime not found');
        }
      
        // Actualiza los campos del anime
        power.name = name;
        power.description = description;
        power.image = image;
      
        // Guarda los cambios en la base de datos
        await power.save();
      
        // Obtén instancias de Personaje por sus IDs
      
        // Actualiza los personajes asociados al anime      
        return power;
      } catch (error) {
        throw error;
      }
    };
   
module.exports = {allPowers,createPowers, deletePower,uptadePower}