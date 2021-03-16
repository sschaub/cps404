// demo.js
// To use this demo:
//   npm install request
//   npm install -g json-server
//   json-server --watch db.json
//   node demo.js

let request = require('request');

let options = {
  url: 'http://localhost:3000/posts',
  headers: {
    'Content-Type': 'application/json'
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    result = JSON.parse(body);
    result.forEach(function(item) {
        console.log(item.id + ": " + item.message);
    });
  } else {
      console.log(error);
      console.log(response.statusCode);
  }
});
