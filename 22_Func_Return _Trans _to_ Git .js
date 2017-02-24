//function return 
//modified original code Zahra A.
//random is a function that returns a num

function setup() {
  // var angle = degrees(PI/2);//converst function to antoher function
  // console.log(angle);
  
  var km = milesToKm(50.3); // Defining what I want to occur. How many kilometers is this? I want miles to change to kilometers and for it to appear in the console..  
  console.log(km);
  
  var km2 = milesToKm(6.6);//same as but just different process.
  console.log(km2);
  
   //console.log(milesToKm(90));
}

function milesToKm(miles) { //stating the formula
  var km = miles * 1.6;
  return km;//once it finishes execustion it gives you km.
}