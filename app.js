
function newTS() { return new Date().getTime(); };

var total = 0;
var clicks = 0;

//actual time stamps in milliseconds
var allTimes = [];

//time since last click
var allClicks = [];

var theTime = 0;
//need to initialize once so that i can keep a time running from zero or something
var i = 0;
var origin = 0;
var gameOver = false;


function myFunc(){
	//update("debug", clicks);
	if(clicks==0){//first button click

		//store origin time ONLY
		origin = newTS()%1000000;
		allTimes[clicks]=origin;
		//theTime = origin - newTS()%1000000;
		update("disp", "Go!");

		clicks++;
	}else if(clicks == 1){
		var realTime =newTS()%1000000;
		//next is the interval between clicks
		var next = realTime - origin;
		update("disp", "clicks: "+ clicks + "! " +next);

		allClicks[clicks-1]=next;
		allTimes[clicks]=realTime;

		total+=next;
		clicks++;
	}else if(clicks < 11){
		//11 > clicks >= 2
		realTime = newTS()%1000000;
		next = realTime - allTimes[clicks-1];
		update("disp", "clicks: "+ clicks + "! " +next);

		allClicks[clicks-1] = next;
		allTimes[clicks]=realTime;

		total+=next;
		clicks++;
	}else{
		update("disp", "refresh to play again");
		gameOver = true;
	}

	if(gameOver){

		//reminder: allTimes is the actual time stamps, starting with origin at 0 to clicks
		//allClicks is intervals, starting from 0 to clicks - 1
		
		var mean = total / (clicks - 1);
		var varTotal = 0;
		for(i=0; i<clicks-1; i++){
			varTotal += Math.pow(mean-allClicks[i], 2);
		}

		//var stdDev = Math.sqrt(varTotal/(clicks-1));
		var stdDev = Math.floor(Math.sqrt(varTotal/(clicks-1)));


		update("score", "Score: "+stdDev);
		//total = 0;
	}

	//next: add reading and writing of high scores into a local text file!
}

function showMore(){
	readTextFile("highscores.txt");
	//readTextFile("file:///C:/Users/Michael.Sang-XPS/Documents/angles/angles/highscores.txt")
}

function update(id, text){

	document.getElementById(id).innerHTML = text;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                update("desc", allText);
            }
        }
    }
    rawFile.send(null);
}

// function personController($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
// }

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