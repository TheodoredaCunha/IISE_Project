var darkMode = true; //variable telling indicating the current state of dark or light mode

/*
Toggling dark mode on and off
*/
function darkModeToggle(){
    if(darkMode == true){ //if dark mode is on, we want to turn it off
		darkMode = false;//changing the state
		document.body.style.backgroundImage = "linear-gradient(rgb(210, 210, 210), rgb(255, 255, 255))"; //changing the background color to light color
		document.getElementById("darkModeButton").innerHTML = "Dark Mode"; //change text in button
	}else{ 	//if dark mode is off, we want to turn it on
		darkMode = true; //changing the state
		document.body.style.backgroundImage = "linear-gradient(rgb(70, 70, 70), rgb(0, 0, 0))"; //changing the background color to dark color
		document.getElementById("darkModeButton").innerHTML = "Light Mode"; //change text in button
	}
}


/*
Showing Pop up box. To save space and to not overload the users with text, detailed information can be found in a hidden pop up box
The user simply clicks on the topic they want to learn about, and detailed information about it will be shown.
*/
function popUp(number){ //"number" indicates which (of the three) options were clicked
		if(number == 0){ //if the number is zero, the machine learning will be shown
			document.getElementById("expandedDivTitle").innerHTML = "Map of Machine Learning"; //change title
			document.getElementById("hidden_content").innerHTML = document.getElementById("text_content0").innerHTML; //change content			
		}
		else if(number == 1){ //if the number is one, information about supervised learning will be shown
			document.getElementById("expandedDivTitle").innerHTML = "Supervised Learning"; //change title
			document.getElementById("hidden_content").innerHTML = document.getElementById("text_content1").innerHTML; //change content
		}else if(number == 2){ //if the number is one, information about semi-supervised learning will be shown
			document.getElementById("expandedDivTitle").innerHTML = "Semi-Supervised Learning"; //change title
			document.getElementById("hidden_content").innerHTML = document.getElementById("text_content2").innerHTML; //change content		
		}else{ //if the number is one, information about unsupervised learning will be shown
			document.getElementById("expandedDivTitle").innerHTML = "Unsupervised Learning"; //change title
			document.getElementById("hidden_content").innerHTML = document.getElementById("text_content3").innerHTML; //change content
		}
		document.getElementById("backgroundDiv").style.display = "block"; //show background div
		document.getElementById("popUpBox").style.display = "block"; //show popup box
}


/*
Hiding pop up box
*/
function hide(){
	document.getElementById("backgroundDiv").style.display = "none"; //hide background div
	document.getElementById("popUpBox").style.display = "none"; //hide popup box
}