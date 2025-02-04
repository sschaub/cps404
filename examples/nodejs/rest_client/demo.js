// demo.js
// To use this demo:
//   npm install -g json-server
//   json-server --watch db.json
//   node demo.js

let options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

fetch('http://localhost:3000/posts', options).then(response => {
  if (response.status != 200) {
    throw new Error(`Received status code ${response.status}`)
  }
  return response.json()
}).then(data => {
    data.forEach(item => {
        console.log(item.id + ": " + item.message);
    });
}).catch(error => {
  console.error(`Error: ${error}`)

})
