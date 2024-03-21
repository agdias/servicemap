const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbSetup');
const  categorias = require('./src/routes/categorias');
const recursos = require('./src/routes/recursos');
const cors = require('cors');

const port =  process.env.PORT || 3300;
const app = express();
connectDB();

const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/v1/categorias', categorias)
app.use('/api/v1/recursos', recursos)


app.listen(port, () => console.log(`Now listening on port ${port}`))