
function newTS() { return new Date().getTime(); };


// var myNum = Date.now;
//var millis = newTS()-1412821200000;

var total = 0;
var clicks = 0;

//actual time stamps in milliseconds
var allTimes = [];

//time since last click
var allClicks = [];

var theTime = 0;
//need to initialize once so that i can keep a time running from zero or something
//var millis = newTS() % 10000;
var i = 0;
//var first = true;


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
	if(clicks==0){//first button click

		//store origin time ONLY
		var origin = newTS()%1000000;
		allTimes[clicks]=origin;
		//theTime = origin - newTS()%1000000;

		clicks++;
	}else if(clicks == 1){
		var realTime =newTS()%1000000;
		var next = realTime - origin;
		allClicks[clicks-1]=next;
		allTimes[clicks]=realTime;
		clicks++;
	}else if(clicks < 11){
		//11 > clicks >= 2
		theTime = (newTS()%1000000) - allTimes[clicks-2];
		allTimes[clicks-1]=theTime;
		clicks++;
	}

	allTimes[clicks] = theTime;
	clicks++;

	//in the process of fixing
	theTime = newTS() % 1000000;
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