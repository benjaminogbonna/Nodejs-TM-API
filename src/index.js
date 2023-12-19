const express = require('express')
require('./db/mongoose')
// reruire()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests not allowed')
//     } else {
//         next()
//     }
// })
// app.use((req, res, next) => {
//         res.status(503).send('App under maintenance! Check back soon.')
// })

app.use(express.json())
app.use(userRouter) // for users
app.use(taskRouter) // for tasks

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

