const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) =>
    res.send({ msg: 'Welcome to the Contact Keeper API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));