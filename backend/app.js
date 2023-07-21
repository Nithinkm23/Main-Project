const express = require('express')
const app = new express()
const morgan = require('morgan')
const cors=require('cors')

require('dotenv').config() 
require('./DB/mongodb')
app.use(morgan('dev'))
app.use(cors())

const userRoute=require('./routes/userRoute')
app.use('/api',userRoute)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})