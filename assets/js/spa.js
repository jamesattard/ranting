angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){

	io.socket.get('/emoji', function (data){
		$scope.emojis = data;
		$scope.$apply();
	});

	io.socket.on('emoji', function (event){
		switch (event.verb) {
			case 'created':
				$scope.emojis.push(event.data);
				$scope.$apply();
				break;
			}
	});

}]);


// ---------------------------------------------------------------------------
// Using http:

//angular.module('Platzi').controller('BaseCtrl', ['$scope', '$http', function ($scope, $http){
//
//	$http.get('/emoji').then(function (response){
//		$scope.emojis = response.data;
//	});
//
//}]);




// ----------------------------------------------------------------------------
// Original hard-coded emojis
//angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){
//
// Fake hard-coded emojis
//	$scope.emojis = [
//	
//	{
//		id: 1,
//		text: 'foo'
//	},
//	{
//		id: 2,
//		text: 'baz'
//	},
//	{
//		id: 3,
//		text: 'bar'
//	}
//	
//	];
//
//}]);
