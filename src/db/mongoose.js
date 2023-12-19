const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// const ben = User({
//     name: ' Onyedikachi   ',
//     email: 'onyedikachi1997@gmail.com',
//     password: 'Password',
//     age: 0
// })

// ben.save().then((result) => {
//     console.log(result)
//     console.log(ben)
// }).catch((error) => {
//     console.log(error)
// })



// const firstTask = Task({
//     description: 'Go to the gym',
//     completed: false
// })

// firstTask.save().then((result) => {
//     console.log(firstTask)
// }).catch((e) => {
//     console.log(e)
// })