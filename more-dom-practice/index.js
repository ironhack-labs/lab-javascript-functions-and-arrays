

  var paragraph = document.getElementById('paragraph');

  var googleLink=document.querySelector("#google-link");

  googleLink.setAttribute('href','http://www.google.com');

  googleLink.setAttribute("target","_blank");

  paragraph.removeAttribute("class");

  var introduction=document.createElement("p");



var body=document.getElementsByTagName("body")[0];

body.appendChild(introduction);

var introText=document.createTextNode( "My name is Joe! Nice to meet you!");

paragraph.appendChild(introText);

var button=document.getElementById("add-item-button");
var list=document.getElementById("item-list");

var number=0;

button.onclick=function() {
number++ ;
var li=document.createElement("li");
var itemNumber=document.createTextNode("Item number " + number );
li.appendChild(itemNumber);
list.appendChild(li);

};


        // form...............

var formButton=document.getElementsByClassName("form-button")[0];


formButton.onclick=function(){
  var input=document.getElementsByTagName("input")[0];
  console.log(input.value);
}
