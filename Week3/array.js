var main = function () {
    "use strict";
	var mymax =[45, 60, 33, 55, 85];
	var max= [] ;
	max[0] = mymax[0];
	
	for (var i = 0; i < mymax.length; i++) {
		
		if (max[0] < mymax[i + 1]){
			max[0] = mymax[i + 1];
			i++;
		
        }
		
	};
	console.log(max[0]);
	return max[0];
};
$(document).ready(main);