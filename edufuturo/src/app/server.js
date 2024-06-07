const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/addressdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addressSchema = new mongoose.Schema({
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  zip: String,
  complement: String,
  number: String,
});

const Address = mongoose.model('Address', addressSchema);

app.post('/api/addresses', async (req, res) => {
  const { street, neighborhood, city, state, zip, complement, number } = req.body;
  const address = new Address({ street, neighborhood, city, state, zip, complement, number });
  await address.save();
  res.status(201).send(address);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
