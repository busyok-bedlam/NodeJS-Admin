const Item = require('./db/models/item');
const bodyParser = require('body-parser');
const app = require('express')();
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const data = await Item.find({});
    res.send(data.toObject())
  }
  catch(err) {
    res.status(404).json({
      err: err.message
    })
  }

})
app.get('/aaaa', (req, res) => {
  return nextApp.render(req, res, '/a', req.query)
});

app.get('/login', (req,res) => {
  return nextApp.render(req,res, '/login')
})

app.get('/add-item', async (req,res) => {
  const data = await new Item({name: "Bulat"}).save();
  res.json({
	data: "Success"
  })
})

require('./db')().then(() => {
  nextApp.prepare().then(() => {
    app.listen(3000, () => {
      console.log('connect to port 8080')
    })  
  })
})
