var cat = {
  legs: 3,
  name: "Harmony",
  color: "Blue"
}

console.log(cat);
console.log(Object.keys(cat));
console.log(cat.name);
console.log(Object.values(cat));

var cat2 = {};
cat2["name"] = "Arthur";
cat2["age"] = 13;
cat2["colour"] = "Ginger";
console.log(cat2);
console.log(Object.keys(cat2));
console.log(cat2.age);

console.log("--------------");

var cat3 = {};
cat3.name = "Wilfred";
cat3.age = 9;
cat3.colour = "Siamese";
console.log(cat3);
console.log(Object.values(cat3));
console.log(cat3.age);

console.log("--------------");

console.log(cat3.height);
let cat4 = {
  name: "William",
  age: 14,
  colour: "Brown",
  inoculationDate: [23,11,2019]
}
console.log(cat4);
console.log(cat4.inoculationDate);
console.log(cat4.inoculationDate.join("/"));

console.log("--------------");

var dinosaurs = [
{  "name": "Tyrannosaurus Rex", period: "Late Cretaceous"},
{  "name": "Stegosaurus", period: "Late Jurassic" },
{  "name": "Plateosaurus", period: "Triassic" }
]

console.log(dinosaurs);
console.log(dinosaurs[0]);
console.log(dinosaurs[2]);
console.log(dinosaurs[2].period);
console.log("Thw name in strings: " + dinosaurs[0]["name"]);
console.log(dinosaurs[1].name);


console.log("--------------");

var anna = { name: "Anna", age: 11, luckyNumbers: [2,4,8,16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3,9,40] };
var kate = { name: "Kate", age: 5, luckyNumbers: [1,2,3] };

var friends = [anna, dave, kate];
console.log(friends);
console.log(friends[1]);
console.log(friends[0].luckyNumbers[2]);

console.log("--------------");

var myBank = [
  { name: "Tosin", amountOwed: 150.00 },
  { name: "Bola", amountOwed: 70.00 },
  { name: "Folahan", amountOwed: 0.00 }
]
myBank[2].amountOwed += 200.00;
console.log(`${myBank[0].name} owes me: £${myBank[0].amountOwed}, ${myBank[1].name} owes me: £${myBank[1].amountOwed} & ${myBank[2].name} owes me: £${myBank[2].amountOwed}`);

console.log("--------------");

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexandrer Gould"],
    format: "DVD"
  }
}

var findingNemo = movies["Finding Nemo"];

console.log(movies);
console.log(findingNemo.actors);
console.log(findingNemo.duration);

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Paul Newman", "Larry the Cable Guy", "Bonnie Hunt"],
    format: "Blue-ray"
}

movies["Cars"] = cars

console.log(movies);

var starWarsEpisodeIV = {
  releaseDate: 1983,
  duration: 134,
  actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  format: "DVD"
}

movies["Star Wars: Episode VI - Return of the Jedi"] = starWarsEpisodeIV

console.log(movies);
console.log(Object.keys(movies));

console.log("--------------");

var scores = {
  "Frank": 0,
  "Stephen": 0,
  "George": 0
}

console.log(`The game scores are + Frank: ${scores["Frank"]}, Stephen: ${scores["Stephen"]}, George: ${scores["George"]}`);
scores["Stephen"] += 10
console.log(`The game scores are + Frank: ${scores["Frank"]}, Stephen: ${scores["Stephen"]}, George: ${scores["George"]}`);

console.log("--------------");

var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7,9,{ purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
}

console.log(myCrazyObject["some array"][2].number);
