if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}

var myNum = Date.now;
<p>myNum</p>