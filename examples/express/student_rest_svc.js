var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

students = [{ id: 234, name: 'fred', grade: 89.4 }]

app.get('/students', function(req, res) {
 
  res.send(students);
});

// curl -v  -X DELETE http://localhost:3000/students/234
app.delete('/students/:id' , function(req, res) {
  var id = req.params.id;
  for (var i = 0; i < students.length; ++i) 
  {
    if (students[i].id == id)
    {
      students.splice(i, 1);
    }
  }
  res.send("He's dead, Jim.");
});

// curl -v -H "Content-Type: application/json"  --data-binary "@student.json" http://localhost:3000/students
app.post('/students', function(req, res) {
  if (req.body.id) {
    students.push(req.body);
    res.send("Created: " + req.body);
  } else {
    res.status(400).send("No id supplied...");
  }
});

var port = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});