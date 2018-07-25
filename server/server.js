var express = require('express')
var bodyParser = require('body-parser')
var { ObjectID } = require('mongodb')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/users')

var app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todo) => {
        res.send({ todo })
    }, (e) => {
        res.status(400).send(e)
    })
})

app.post('/user', (req, res) => {
    var user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/user', (req, res) => {
    User.find().then((user) => {
        res.send({ user })
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/user/:id', (req, res) => {
    var id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send
    }

    User.findById(id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send({ user })
    }).catch((e) => {
        res.send(400).send()
    })

})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.send(404).send
        }

        res.send(todo)
    }).catch((e) => {
        res.status(404).send
    })
})


app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = { app }