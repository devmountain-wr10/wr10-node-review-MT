// Require Express
const express = require('express')

// Create an instance of express and save it to a variable
const app = express()

// Middleware that parses JSON into JavaScript
app.use(express.json())

const movies = [
    {
        id: 1,
        name: 'Star Wars: Return of the Jedi'
    },
    {
        id: 2,
        name: 'Fargo'
    },
    {
        id: 3,
        name: 'Interstellar'
    }
]

app.get('/api/movies', (req, res) => {
    res.status(200).send(movies)
})

// Create listen function
const port = 3333
app.listen(port, () => console.log(`Server is running on ${port}`))