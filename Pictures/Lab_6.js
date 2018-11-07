// JavaScript Document

function moveLeft(){
	$("#box").animate({left:"-=500px"}, 5000);
}

function moveRight(){
	$("#box").animate({left:"+=500px"}, 5000);
}

function moveUp(){
	$("#box").animate({top:"-=500px"}, 5000);
}

function moveDown(){
	$("#box").animate({top:"+=500px"}, 5000);
}

function opacity(){
	$("#box").animate({opacity:"0"}, 5000);
}

function opacityOff(){
	$("#box").animate({opacity:"1"}, 5000);
}

function changeCircle(){
	$("#box").animate({borderRadius:"100%"}, 5000);
}

function changeSquare(){
	$("#box").animate({borderRadius:"0%"}, 5000);
}
function sizeBig(){
	$("#box").animate({height:"+=50px"}, 5000);
	$("#box").animate({width:"+=50px"}, 5000);
}

function sizeSmall(){
	$("#box").animate({height:"-=50px"}, 5000);
	$("#box").animate({width:"-=50px"}, 5000);
}

function stop(){
	$("#box").stop({});
}