const {Personaje,Power} = require('../db')

const allPersonajes = async()=>{
return Personaje.findAll({include: {model: Power, attributes: ['name','description','image'],    through: {
  attributes:[]
},}})
}

const createPersonajes = async (name, power, description, image) => {
  try {
    // Crea el nuevo personaje en la base de datos
    const newPersonaje = await Personaje.create({ name, description, image });

    // Añade el poder al personaje
    await newPersonaje.addPower(power);

    return newPersonaje;
  } catch (error) {
    throw error;
  }
};

const updatePersonaje = async (id, name, image, description,powerIds) => {
  try {
    // Encuentra el anime por su ID
    const personaje = await Personaje.findByPk(id);
  
    // Verifica si el anime existe
    if (!personaje) {
      throw new Error('Personaje not found');
    }
  
    // Actualiza los campos del anime
    personaje.name = name;
    personaje.image = image;
  personaje.description = description
    // Guarda los cambios en la base de datos
    await personaje.save();
  
    // Obtén instancias de Personaje por sus IDs
    const powers = await Power.findAll({ where: { id: powerIds } });
  
    // Actualiza los personajes asociados al anime
    await personaje.setPowers(powers);
  
    return powers;
  } catch (error) {
    throw error;
  }
};

const deletePersonaje = async (id) => {
  try {
    // Encuentra el anime por su ID
    const personaje = await Personaje.findByPk(id);

    // Verifica si el anime existe
    if (!personaje) {
      throw new Error('Personaje not found');
    }

    // Elimina el anime de la base de datos
    await personaje.destroy();

    return true; // Indica que el anime se eliminó correctamente
  } catch (error) {
    throw error;
  }
};


const idPersonaje= async(id)=>{
  const IdPersonaje = await Personaje.findByPk(id,{include: {model: Power, attributes: ['name','image', 'description'],    through: {
    attributes:[]
},}})

  return IdPersonaje

}


module.exports= {allPersonajes, createPersonajes,updatePersonaje, deletePersonaje, idPersonaje}