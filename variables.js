var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
var age = 42;
var ageInSeconds = secondsInAYear * age;
console.log(ageInSeconds);

// ++ and -- operators:
var highFives = 0;
highFives ++;
highFives ++;
highFives ++;
console.log(highFives);

var myName = "Nick";
console.log(myName[2])

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] );

var tring = "This is a long string."
console.log(tring.slice(3).toUpperCase().toLowerCase())

//Silly String season:
var sillyString = "hELlo THERE, hOW ARE yOu doINg?"
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
firstCharacterUpper + restOfString;

console.log(firstCharacterUpper + restOfString)

//Combining Logical operators:
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange)
console.log(shouldGoToSchool);

//Cinema PG-13 movie filter:
var age = 13;
var accompanied = false;

// If someone is 13 or over
//  -> "they're allowed in."
//  else if they are  not 13 but they're accompanied by an adult
//  -> "they're also allowed in."
//  else
//  "They can't see the movie."

if (age >= 13){
  console.log("You're allowed in!")
}else if (age < 13 && accompanied) {
  console.log("You're allowed in!")
}else {
  console.log("You can't see the movie!")
}
