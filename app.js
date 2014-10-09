
function newTS() { return new Date().getTime(); };


// var myNum = Date.now;
//var millis = newTS()-1412821200000;

var total = 0;
var clicks = 0;
var allTimes = [];
var origin = newTS()%100000000;
var firstTime = origin - newTS()%1000000;
//var millis = newTS() % 10000;
var i = 0;


// function personController($scope) {
//     $scope.person = {
//         firstName: "John",
//         lastName: "Doe"
//     };
//     $scope.myVar = true;
//     $scope.theButt = myFunc() {
//         $scope.myVar = !$scope.myVar;
//     };
// }

function myFunc(){
	clicks++;

	var theTime = newTS() % 1000000;
	allTimes.push(theTime);
	total+=theTime;

	var tempTotal = 0;

	var mean = total/clicks;

	for(i=0; i < allTimes.length; i++){

		tempTotal+=Math.pow(allTimes[i]-mean,2);
	}

	var stdDev = Math.sqrt(tempTotal/allTimes.length);

	document.getElementById("num").innerHTML = "clicks: "+clicks+"\ntime: " + theTime +"\nstdDev: "+stdDev;
}

// function personController($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
// }