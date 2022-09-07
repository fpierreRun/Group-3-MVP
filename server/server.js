const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use(require('./routes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now serving on PORT: ${PORT}`)
  })
})