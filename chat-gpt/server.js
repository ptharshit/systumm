const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleWare');

//routes path
const authRoutes = require('./routes/authRoutes');


dotenv.config()

connectDB();
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)

const port = process.env.Port || 8080

// API ROUTES
app.use('/api/v1/auth',authRoutes);

app.listen(8080,() =>{
    console.log(`server running at ${process.env.DEV_MODE} mode on port no ${port}`.bgBlue.white);
});