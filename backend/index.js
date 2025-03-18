const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home');
const dotenv = require("dotenv")
const cors = require('cors');

dotenv.config();

const app = express();
// const PORT = 5000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB Connected Success')).catch(err => console.log(err))

app.use('/api', homeRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
