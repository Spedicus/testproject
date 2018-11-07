// JavaScript Document
var thanosCar;

thanosCar = {
	type: "car",
	species: "Titan Car",
	powerLevel: "infinite",
	rush: function() {
		"use strict";
		var numb = prompt("Enter a value greater than 0","");
		document.getElementById("result").innerHTML="The Thanos Car rushes at you in excess of " +numb+ " miles per hour!";
		document.getElementById("mainPic").src="pictures/thanosrush.jpg";
	},
	snap: function() {
		"use strict";
		document.getElementById("result").innerHTML="The Thanos Car revs its engine wiping half the universe from existence!";
		document.getElementById("mainPic").src="pictures/thanossnap.jpg";
	},
	block: function() {
		"use strict";
		document.getElementById("result").innerHTML="The Thanos Car blocks your attack!";
		document.getElementById("mainPic").src="pictures/thanosblock.jpg";
	}
};

var normal = function() {
	"use strict";
	document.getElementById("result").innerHTML="";
	document.getElementById("mainPic").src="pictures/thanoscar.jpg";
}; //this will return the image and the p tag to its original state