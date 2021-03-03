const express = require('express');
const connectDB = require('./config/db');
const books = require('./routes/api/books')//in order to test in postman for diff routes
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));