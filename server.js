const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/thanks', (req, res) => {
    const { fname, lname, uname, city, state, pin } = req.body
    const data = { Note: 'Thankyou for validating the form',fname, lname, uname, city, state, pin, status: 'success' }
    res.json(data)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})