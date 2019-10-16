const bodyParser = require('body-parser');
const server = require('express')();
const { pageRouter, apiRouter } = require('./routes'); 

const PORT = parseInt(process.env.PORT, 10) || 3000
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/api', apiRouter);
pageRouter(server, app);

require('./db')().then(() => {
  app.prepare().then(() => {
    server.listen(PORT, () => {
      console.log('connect to port ' + PORT)
    })
  })
})
