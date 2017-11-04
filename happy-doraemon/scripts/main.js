// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/image-doraemon.png') {
      myImage.setAttribute ('src','image-doraemon-eating.png');
	} else {
	  myImage.setAttribute ('src','images/image-doraemon.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Doraemon is happy for ' + myName +'!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Doraemon is happy for ' + storedName +'!';
}

myButton.onclick = function() {
  setUserName();
}
