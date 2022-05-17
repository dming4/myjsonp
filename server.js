let express = require('express');
var http = require('http');
let port = 1013;

let app = new express();
app.get('/say', function (req, res) {
  let { cb } = req.query;

  res.write(`${cb}('hello, jsonp')`);
  res.end();
});
app.listen(port, () => {
  try {
    console.log(`http server start listening at http://localhost:${port}`);
  } catch (error) {}
});

// http
//   .createServer(function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.writeHead(200,{'Content-Type':'application/javascript;charset=utf-8;'})

//     let { cb } = req.query;

//     res.write(`${cb}('hello jsonp')`);
//     res.end();
//   })
//   .listen(1013, function () {
//     console.log('listen on port 1013');
//   });
