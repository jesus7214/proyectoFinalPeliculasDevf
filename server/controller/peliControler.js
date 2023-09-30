const peli = require('../modelos/peli');

exports.getPelissByNombre = async (req, res) => {
  try {
    const pelii = await peli.find();
    

    res.json(pelii);
  } catch (error) {
    res.status(500).json({ error: "error al obtener LOS DATOS" });
    
  }
};
