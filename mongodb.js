// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // Create documents
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Daniel',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Mercy',
    //         age: 22
    //     }, {
    //         name: 'Harmony',
    //         age: 13
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.ops)
    // })

    // Read documents
    // db.collection('users').findOne({name: 'Benjamin', age: 27}, (error, user) => {
    //     if (error) {
    //         return console.log('Could not retrive data, something went wrong.')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({name: 'Benjamin'}).toArray((error, users) => {
    //     // if (error) {
    //     //     return console.log('Could not retrive data, something went wrong.')
    //     // }
    //     console.log(users)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks[0].description)
    // })

    // Update documents
    // db.collection('users').updateOne({
    //     _id: new ObjectID('65606e6da961073e087132db')
    // }, {
    //     $set: {
    //         name: 'Onyedikachi'
    //     }

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // Delete documents
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})