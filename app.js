var restify = require('restify');


//server
var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  console.log(add(1,2));
  return next();
});

function add(n1, n2){
	return n1+n2;
}
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

//client
var client = restify.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});

client.get('/echo/this%20is%20just%20a%20test', function (err, req, res, obj) {
  if(err) console.log("An error ocurred:", err);
  else console.log('Server returned: %j', obj);
});
