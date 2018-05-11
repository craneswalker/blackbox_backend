const port = parseInt(process.env.PORT || 3000)
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()
const todo = require("./routes/todoRoutes")
const done = require("./routes/doneRoutes")


app.use(morgan('dev'))
app.use(bodyParser.json())

app.use("/todo", todo)
app.use("/done", done)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
});


// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app


app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port))