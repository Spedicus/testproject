// JavaScript Document
$("#resize").on("click", function(){
	"use strict";
	$("#sqaure").animate({height:'300px',width:'300px'},3000);
	$("#sqaure").animate({height:'-=100px',width:'-=100px'},3000);
});
$("#move").on("click", function(){
	"use strict";
	$("#sqaure").animate({marginLeft:"-=300px"},3000);
	$("#sqaure").animate({marginLeft:"+=300px"},3000);
});
$("#transform").on("click",function(){
	"use strict";
	$("#sqaure").animate({borderRadius:"90%"},3000);
	$("#sqaure").animate({borderRadius:"0%"},3000);
	
});
$("#hide").on("click",function(){
	"use strict";
	$("#sqaure").hide(3000);	
	$("#sqaure").show(3000);
});
$("#skip").on("click",function(){
	"use strict";
	$("#sqaure").stop(true,true);
});
$("#stopAll").on("click",function(){
	"use strict";
	$("#sqaure").stop(true);
});
$("#reset").on("click",function(){
	"use strict";
	location.reload();
});