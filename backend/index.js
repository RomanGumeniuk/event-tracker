const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Import User model
const User = require('./models/user.model.ts');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.post('/api/users', async (req, res) => {
        try { 
            const user = await User.create(req.body);
            res.status(201).json(user);
        } 
        catch (error) {
        res.status(500).json({ message: error.message });
        }
});

app.get('/', (req, res) => {
    res.send('Hello from expreess and mongodb! Yo gurt dudeman skibidi ohio sigma  ');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
});

