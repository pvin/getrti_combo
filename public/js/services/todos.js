angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', function($http) {
		return {
//			get : function() {
//				return $http.get('/api/information');
//			}
			get : function(todoData) {
                console.log
                return $http.post('/api/information', todoData);

			}
//			delete : function(id) {
//				return $http.delete('/api/todos/' + id);
//			}
		}
	});