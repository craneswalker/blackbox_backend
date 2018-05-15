const knex = require("./database-connection")

module.exports = {
//Queries for Done Table
    getAllDones(){
      return knex('done')
      .select()
    },
    viewDone(id){
      return knex('done')
      .where('id', id)
      .first()
      .returning('*')
    },

//Queries for Todo Table
    getAllTodos(){
      return knex('todo')
      .select()
    },
    viewTodo(id){
      return knex('todo')
      .where('id', id)
      .first()
      .returning('*')
    },
    addTodo(body){
      return knex('todo')
      .insert(body)
      .returning('*')
      .then(newtodo => newtodo[0])
    },
    deleteTodo(id){
      return knex('todo')
      .delete()
      .where('id', id)
    }
}