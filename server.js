import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 8080;

server.use(middlewares);

server.use(
    jsonServer.rewriter({
    "/*": "/$1",
    })
);

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});