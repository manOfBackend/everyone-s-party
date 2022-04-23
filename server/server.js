const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

router.render = function (req, res) {
  console.log(req._parsedUrl, '');
  if (req._parsedUrl.pathname === '/posts') {
    res.jsonp({
      posts: res.locals.data,
    });
  } else {
    res.jsonp(res.locals.data);
  }
};

server.listen(3000, () => {
  console.log('JSON Server is running');
});
