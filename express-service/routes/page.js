const pageRouter = (server, app) => {
    const handle = app.getRequestHandler();

    server.get('/register-page', (req, res) => {
        return app.render(req, res, '/register-page', req.query)
    });
    server.get('/login', (req, res) => {
        return app.render(req, res, '/login')
    })
    server.all('*', (req, res) => {
        return handle(req, res)
    })
}

module.exports = pageRouter;