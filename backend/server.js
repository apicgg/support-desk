const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to DB
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// API Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Error
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
