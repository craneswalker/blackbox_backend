const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllDones()
  .then(dones => {
    res.status(200).json({dones})
  })
})

router.get('/:id', (req, res) => {
  queries.viewDone(req.params.id)
  .then(done => {
    done
      ? res.status(200).json({done})
      : res.status(404).json({message: "no driver found for this id"})
  })
})

router.post('/', (req, res) => {
  queries.addDone(req.body)
  .then(newdone => {
    res.status(201).json({newdone})
  })
})

router.delete('/:id', (req, res) => {
  const id  = req.params.id
  queries.deleteDone(id)
  .then(deleted => {
    res.status(204)
  })
})

module.exports = router