var backgroundColor = "dark";

function darkModeToggle(){
    if(backgroundColor == "dark"){
		backgroundColor = "light";
		document.body.style.backgroundImage = "linear-gradient(rgb(210, 210, 210), rgb(255, 255, 255))";
		document.getElementById("darkModeButton").innerHTML = "Light Mode";
	}else{
		backgroundColor = "dark";
		document.body.style.backgroundImage = "linear-gradient(rgb(70, 70, 70), rgb(0, 0, 0))";
		document.getElementById("darkModeButton").innerHTML = "Dark Mode";
	}
}