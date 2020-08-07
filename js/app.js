(function() {
'use strict';
angular.module('foodfinder',[]).controller('foodcontroller',foodcontroller);
foodcontroller.$inject=['$scope'];
function foodcontroller($scope){
	$scope.stringin="";
	$scope.message="";
	$scope.findmessage =function()
	{
		if($scope.stringin=="")
		{
			$scope.message="Please enter data first!";
		}
		else
		{
			var items=$scope.stringin.split(',');
			if(items.length>3)
				$scope.message="Too much!";
			else
				$scope.message="Enjoy!"
		}
	}





}

})();
