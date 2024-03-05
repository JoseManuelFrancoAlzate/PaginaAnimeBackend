const {allPersonajes,createPersonajes, updatePersonaje, deletePersonaje,idPersonaje} = require('../controllers/personajeController')

const getPersonajeHandler = async (req, res)=>{
try {
    const personajes = await allPersonajes()

    res.status(200).json(personajes)
} catch (error) {
    res.status(400).json({error:error.message})
}
    return allPersonajes()
}
const idPersonajeHandler = async(req,res)=>{

  const {id} = req.params
try {

  let personajeId= await  idPersonaje(id)

  res.status(200).json(personajeId)
} catch (error) {
  res.status(400).json({error:error.message})
}
}

const postPersonajeHandler= async(req,res)=>{
    const {name,power, description, image} = req.body
try {
    let newPersonajes= await createPersonajes(name,power, description,image)

    res.status(200).json(newPersonajes)
} catch (error) {
    res.status(400).json({error:error.message})
}
}

const updatePersonajeHandler = async (req, res) => {
    const { id } = req.params; // Obtén el ID del anime a actualizar
  const { name,  image, description,power } = req.body;

  try {
    // Llama a la función para actualizar el anime
    const updatedPower = await updatePersonaje(id, name,  image, description, power);
    res.status(200).json(updatedPower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  };
  
  const deletePersonajeHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await deletePersonaje(id);
      if (result) {
        res.status(200).json({ message: 'Personaje deleted successfully' });
      } else {
        res.status(404).json({ error: 'Personaje not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

module.exports = {getPersonajeHandler, postPersonajeHandler, updatePersonajeHandler, deletePersonajeHandler, idPersonajeHandler} 