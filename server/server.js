const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const PROJECT_ROOT = path.resolve(__dirname, '../');
const dotenv = require('dotenv').config({ path: path.resolve(PROJECT_ROOT, 'config', '.env') });

const { SERVER_PORT } = dotenv.parsed;

server.use(middlewares);
server.use(router);

router.render = function (req, res) {
  if (req._parsedUrl.pathname === '/posts') {
    res.jsonp({
      posts: res.locals.data,
    });
  } else if (req._parsedUrl.pathname === '/login') {
    res.jsonp({
      login: res.locals.data,
    });
  }  
  else {
    res.jsonp(res.locals.data);
  }
};
server.listen(SERVER_PORT || 3001, () => {
  console.log('JSON Server is running');
});
