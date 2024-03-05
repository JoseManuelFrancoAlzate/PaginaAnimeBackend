const {allPowers,createPowers, deletePower, uptadePower} = require('../controllers/powerController')


const getPowerHandler = async(req,res)=>{
try {
let poderes= await allPowers()
res.status(200).json(poderes)
} catch (error) {
    res.status(400).json({error:error})
}
}



const postPowerHandler = async(req,res)=>{
    const {name,image,description} = req.body
    try {
    let poderes= await createPowers(name,image,description)
    res.status(200).json(poderes)
    } catch (error) {
        res.status(400).json({error:error})
    }
    }


    const deletePowerHandler = async (req, res) => {
        const { id } = req.params;
      
        try {
          const result = await deletePower(id);
          if (result) {
            res.status(200).json({ message: 'Power deleted successfully' });
          } else {
            res.status(404).json({ error: 'Power not found' });
          }
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }

      const uptadePowerHandler = async (req, res) => {
        const { id } = req.params; // Obtén el ID del anime a actualizar
        const { name, description, image } = req.body;
      
        try {
          // Llama a la función para actualizar el anime
          const updatePower = await uptadePower(id, name, image, description);
          res.status(200).json(updatePower);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };
    
module.exports = {getPowerHandler, postPowerHandler, deletePowerHandler, uptadePowerHandler}