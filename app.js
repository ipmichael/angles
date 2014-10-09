if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}

var myNum = Date.now;

function myFunc(){
	document.getElementById("num").innerHTML = myNum;
}

