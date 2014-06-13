var Information = require('./models/information');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
//	app.get('/api/information', function(req, res) {
//
//		// use mongoose to get all todos in the database
//        Information.find(function(err, todos) {
//
//			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
//			if (err)
//				res.send(err)
//
//			res.json(todos); // return all todos in JSON format
//		});
//	});

	// create todo and send back all todos after creation
	app.post('/api/information', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
//		Todo.create({
//			text : req.body.text,
//			done : false
//		}, function(err, todo) {
//			if (err)
//				res.send(err);

			// get and return all the todos after you create another
        var text_search = req.body.text;
//        console.log('====');
//        console.log(req.body);
        Information.find({ name : {$regex: text_search}  }, function(err, information) {
            //	Information.find({ name :req.params.name}, function(err, information) {
            if (err)
                res.send(err);
            res.json(information);
        })
		});

//	});
//
//	// delete a todo
//	app.delete('/api/todos/:todo_id', function(req, res) {
//		Todo.remove({
//			_id : req.params.todo_id
//		}, function(err, todo) {
//			if (err)
//				res.send(err);
//
//			// get and return all the todos after you create another
//			Todo.find(function(err, todos) {
//				if (err)
//					res.send(err)
//				res.json(todos);
//			});
//		});
//	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};