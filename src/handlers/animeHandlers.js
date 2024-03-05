const  {allAnime, createAnime, idAnime, updateAnime, deleteAnime} = require("../controllers/animeController")


const getAnimeHandler= async(req, res)=>{
try {
  let Animes = await allAnime()

  res.status(200).json(Animes)
} catch (error) {
  res.status(400).json({error:error.message})
}
}

const idAnimeHandler = async(req,res)=>{

  const {id} = req.params
try {

  let animeId= await  idAnime(id)

  res.status(200).json(animeId)
} catch (error) {
  res.status(400).json({error:error.message})
}
}

const postAnimeHandler= async(req,res)=>{
const {name, description,image, personaje} = req.body
try {
  let newAnime= await createAnime(name,description, image,personaje)
res.status(200).json(newAnime)
} catch (error) {
  res.status(400).json({error:error.message})
}

}
const updateAnimeHandler = async (req, res) => {
  const { id } = req.params; // Obtén el ID del anime a actualizar
  const { name, description, image, personaje } = req.body;

  try {
    // Llama a la función para actualizar el anime
    const updatedAnime = await updateAnime(id, name, description, image, personaje);
    res.status(200).json(updatedAnime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteAnimeHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteAnime(id);
    if (result) {
      res.status(200).json({ message: 'Anime deleted successfully' });
    } else {
      res.status(404).json({ error: 'Anime not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {getAnimeHandler, postAnimeHandler, idAnimeHandler,updateAnimeHandler, deleteAnimeHandler}


//Segun el Id que pase me mostrara todos los personajes de ese anime