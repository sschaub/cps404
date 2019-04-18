"use strict";

exports.list = function(req, res, next){
  var user = res.locals.user;
  var errmsg = req.query.errmsg;
  req.db.all("select * from tasks where username = ? order by task_desc", user, function(err, rows) {
    if (err) return next(err);
    var incompleteTasks = [];
    var completeTasks = [];
    for (var i = 0; i < rows.length; ++i) {
      var row = rows[i];
      if (row.complete == 'Y')
        completeTasks.push(row);
      else
        incompleteTasks.push(row);
    }
    res.render('tasks', {incompleteTasks: incompleteTasks, completeTasks: completeTasks, csrf: res.locals._csrf, errmsg: errmsg});
  });
};

exports.add = function(req, res, next){ 
  var user = res.locals.user;
  var taskDesc = req.body.name;
  if (!taskDesc) 
    return res.redirect('/tasks?errmsg=' + encodeURIComponent('You gave me no data.'));
  
  var sql = "insert into tasks(username, task_desc, complete) values ('" + user.replace("'", "''") + "','" + taskDesc.replace("'", "''") + "','N')";

  req.db.run(sql, 
    function(error, result){
      if (error) return next(error);
      
      console.info('Added %s with id=%s', taskDesc, this.lastID);
      res.redirect('/tasks');
    })
};


exports.markCompleted = function(req, res, next) {
  var taskId = req.params.task_id;
  req.db.run("update tasks set complete='Y' where id = ?", taskId, function(error, result) {
    if (error) return next(error);
    console.info('Mark complete task with id=%s.', taskId);
    res.redirect('/tasks');
  });
};

exports.del = function(req, res, next) {
  var taskId = req.query.id;
  req.db.run("delete from tasks where id=" + taskId, function(error, result) {
    if (error) return next(error);
    console.info('Deleted task with id=%s completed.', taskId);
    res.redirect('/tasks');
  });
};
