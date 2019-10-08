const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();

mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

Item = mongoose.model('item', ItemSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const data = await Item.find({});
  res.send(data)
})
app.listen(8080, () => {
  console.log('XXX')
})
// app.get('/', async (req, res) => {
//   try {
//     await new Item({ name: "BULAT" })
//     const result = await Item.findAll({});
//     res.send(result)
//   }
//   catch (err) {
//     throw err;
//   }

// });


const port = 3000;


mongoose
  .connect(
    'mongodb://mongo:27017/expressmongol',
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () => console.log('Server running...'));
  })
  .catch(err => console.log(err));


// // DB schema

