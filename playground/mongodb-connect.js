const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongodb server')
    }
    console.log('Connect to Mongodb')

    // db.collection('Users').insertOne({
    //     name: 'Lucas',
    //     age: '22',
    //     location: 'Av Filipe Lobo 151'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').find({name: 'Lucas'}).toArray().then((docs) => {
    //     console.log('Lucas Users')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err)
    // })

    db.close()
})