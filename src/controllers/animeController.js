const {Anime, Personaje} = require("../db")

const allAnime= ()=>{
return Anime.findAll({include: {model: Personaje, attributes: ['name'],    through: {
    attributes:[]
},}})
}


const createAnime= async(name, description,image, personaje)=>{
 const newAnime = await Anime.create({name, description,image})
 newAnime.addPersonaje(personaje)

 return newAnime
}

const idAnime= async(id)=>{
    const IdAnime = await Anime.findByPk(id,{include: {model: Personaje, attributes: ['id','name','image','description'],    through: {
      attributes:[]
  },}})

    return IdAnime

}

const updateAnime = async (id, name, description, image, personajeIds) => {
    try {
      // Encuentra el anime por su ID
      const anime = await Anime.findByPk(id);
    
      // Verifica si el anime existe
      if (!anime) {
        throw new Error('Anime not found');
      }
    
      // Actualiza los campos del anime
      anime.name = name;
      anime.description = description;
      anime.image = image;
    
      // Guarda los cambios en la base de datos
      await anime.save();
    
      // Obtén instancias de Personaje por sus IDs
      const personajes = await Personaje.findAll({ where: { id: personajeIds } });
    
      // Actualiza los personajes asociados al anime
      await anime.setPersonajes(personajes);
    
      return anime;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteAnime = async (id) => {
    try {
      // Encuentra el anime por su ID
      const anime = await Anime.findByPk(id);
  
      // Verifica si el anime existe
      if (!anime) {
        throw new Error('Anime not found');
      }
  
      // Elimina el anime de la base de datos
      await anime.destroy();
  
      return true; // Indica que el anime se eliminó correctamente
    } catch (error) {
      throw error;
    }
  };
module.exports = {allAnime,createAnime, idAnime, updateAnime,deleteAnime}