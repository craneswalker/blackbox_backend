const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllTodos()
  .then(todos => {
    res.status(200).json({todos})
  })
})

router.get('/:id', (req, res) => {
  queries.viewTodo(req.params.id)
  .then(todo => {
    todo
      ? res.status(200).json({todo})
      : res.status(404).json({message: "no task found for this id"})
  })
})

router.post('/', (req, res) => {
  queries.addTodo(req.body)
  .then(newtodo => {
    res.status(201).json({newtodo})
  })
})

router.delete('/:id', (req, res) => {
  const id  = req.params.id
  queries.deleteTodo(id)
  .then(deleted => {
    res.status(204)
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  queries.putTodo(id, req.body)
  .then((updatedTodo) => {
    res.status(201)
  })
})

module.exports = router