let age = prompt("How old are you? Dear");
 
if(age > 16){
  alert("Welcome I in the world of SuperHero and recall your childhood memories");
}
else{
  alert("Welcome kids in the world of SuperHero")
}
//  setTimeout(function() { alert("my message"); }, time);
function validateForm() {
 let x = document.forms["myform"]["fname"].value;
 if (x == "") {
   alert("Name must be filled out");
   return false;
 }
}