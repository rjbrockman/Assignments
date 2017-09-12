var main = function () {
    "use strict";
	function fizzBuzz(rangestart, rangestop){
		for (var i=rangestart; i <= rangestop; i++){	
			if (i % 15 == 0)
					console.log("FizzBuzz");
				else if (i % 3 == 0)
        		console.log("Fizz");
				else if (i % 5 == 0)
        		console.log("Buzz");
				else
        		console.log(i);
		}
	}
fizzBuzz(1,50);
};
$(document).ready(main);