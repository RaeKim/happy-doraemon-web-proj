// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/image-doraemon.png') {
     myImage.setAttribute ('src','images/image-doraemon-eating.png');
     myImage.setAttribute ('alt','Doraemon enjoying his Dorayaki');
      
	} else {
	  myImage.setAttribute ('src','images/image-doraemon.png');
    myImage.setAttribute ('alt','Doraemon happily carrying a bag of Dorayakis');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myReason = [document.querySelector('#reason1'), document.querySelector('#reason2'), document.querySelector('#reason3')];

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  showContent();
};

function showContent(){
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Doraemon is happy for ' + storedName +'!';
  myReason[0].innerHTML = storedName + ' has visited this site';
  myReason[1].innerHTML = 'He has bunch of Dorayakis to share with ' + storedName;
  myReason[2].innerHTML = storedName + ' is going to click the image of him above so that he can enjoy his share!';
};

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  showContent();
}

myButton.onclick = function() {
  setUserName();
}
