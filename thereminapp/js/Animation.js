

function Animate(){
	var time = 0;
	setInterval("hyoji(time)",100);
}



function hyoji(time){
	if(time>=0 && time <15){
		main.className = "red";
	}else if(time>=15 && time < 30){
		main.className = "yellow";
	}else if(time>=30 && time < 45){
		main.className = "orange";
	}else if(time>=45 && time < 60){
		main.className = "green";
	}else if(time>=60 && time < 75){
		main.className = "aqua";
	}else if(time>=75 && time < 90){
		main.className = "blue";
	}else if(time>=90 && time < 105){
		main.className = "perpule";
	}else if(time>=105){
		time = 0;
	}
	time++;
}