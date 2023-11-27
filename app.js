const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');  // Import the cors module

try {
  mongoose.connect("mongodb+srv://Vinay:4556%40Devaraj@cluster0.tpgkfpg.mongodb.net/bat");
  console.log("connected to mongodb");
} catch(err) {
  console.log(err.message);
}

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

app.get('/microphone_file', async(req, res) => {
  console.log("message received");
  res.status(200).json({message:"chutiya lo"});
})

app.post('/microphone_file', async(req, res) => {
  console.log(req.body);
  res.status(200).send({message:"data received"});
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});