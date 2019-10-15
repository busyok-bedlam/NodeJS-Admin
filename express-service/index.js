const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const session = require('express-session')
const { pageRouter, apiRouter } = require('./routes'); 
const passport = require('passport');

require('./strategies/local')(passport);

const PORT = parseInt(process.env.PORT, 10) || 3000
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

server.set('view engine', 'ejs');
server.use(passport.initialize());
server.use(passport.session())
server.use(session({ secret: 'keyboard cat' }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req,res) => {

});

server.get('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureMessage: '/login',
  failureFlash: true
}),(req,res) => {
  console.log(req.params)
})
// server.use('/api', apiRouter);
// pageRouter(server, app);

require('./db')().then(() => {
  app.prepare().then(() => {
    server.listen(PORT, () => {
      console.log('connect to port ' + PORT)
    })
  })
})
