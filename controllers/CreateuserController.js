const createuser = require('../models/User')


const insertCreateuser = async (req, res) => {
  const { email, password, name } = req.body

  await createuser.insertCreateuser({ email, password, name})
    .then((response) => {
      res.status(201).send({message: 'Usuario  agregado'})
    })
    .catch((error) => {
      res.status(401).send({message: 'Error, datos invalidos'})
    })
}


module.exports = {
  insertCreateuser,
  
}