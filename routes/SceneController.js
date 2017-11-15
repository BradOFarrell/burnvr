const express = require('express')
const router = express.Router()
const { SceneModel } = require('../db/schema')

router.get('/', async (req, res) => {
  console.log('route hit')
  try {
    const scene = await SceneModel.find()
    res.json(scene[0])
  } catch (err) {
    res.send(err)
  }
})

/*

// Read
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const scene = await SceneModel.findById(id)
    res.json(scene)
  } catch (err) {
    res.send(err)
  }
})

// Update
router.patch('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const updatedUser = req.body
    const id = req.params.id;
    const user = await UserModel.findById(id)
    user.party = updatedUser.party
    user.badges = updatedUser.badges    
    user.save()
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

// Create
router.post('/new/', async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new UserModel(req.body)
    const saved = newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})
*/

module.exports = router