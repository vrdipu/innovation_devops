const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const Contact = db.contact;

const app = express();
app.use(cors());
app.use(bodyParser.json());

db.sequelize.sync().then(() => {
  console.log("Database connected and synced.");
});

app.get('/contactlist', async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

app.post('/contactlist', async (req, res) => {
  const contact = await Contact.create(req.body);
  res.json(contact);
});

app.delete('/contactlist/:id', async (req, res) => {
  const result = await Contact.destroy({ where: { id: req.params.id } });
  res.json({ deleted: result });
});

app.put('/contactlist/:id', async (req, res) => {
  const result = await Contact.update(req.body, { where: { id: req.params.id } });
  res.json({ updated: result });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
