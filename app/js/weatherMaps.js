var map = angular.module("myMaps", []);

map.directive("sparkLine", function(){

	return{

		restrict:"E",

		require:"?ngModel",

		scope:{
			sendTo:"@"
		},

		controller:['$scope', '$http', function($scope, $http){

			var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&callback=JSON_CALLBACK&q=";
			$scope.getTemp = function(city) {

			  	$http({
			   		method: 'JSONP',
			    	url: url + city
			  	}).success(function(data) {
			    	var weather = [];
			    	angular.forEach(data.list, function(value){
			      		weather.push(value);
			    	});
			    	$scope.weather = weather;
			  	});
			}
		}],

		link:function(scope, iElem, iAttr){
		},

		template:"<div class='sparkline'><h4>Weather for {{ngModel}}</h4></div>"
	}
});