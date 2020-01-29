var dinosaur1 = "T-Rex";
var dinosaur2 = "Velociraptor";
var dinosaur3 = "Stegosaurus";
var dinosaur4 = "Triceratops";
var dinosaur5 = "Brachiosaurus";
var dinosaur6 = "Pteranodon";
var dinosaur7 = "Apatosaurus";
var dinosaur8 = "Diplodocus";
var dinosaur9 = "Compsognathus";

for (var i = 1; i <= 9; i++) {
  var dinosaur;
  console.log(dinosaur+i);
}

var dinosaurs = ["T-Rex",
                  "Velociraptor",
                  "Stegosaurus",
                  "Triceratops",
                  "Brachiosaurus",
                  "Pteranodon",
                  "Apatosaurus",
                  "Diplodocus",
                  "Compsognathus"];

for (var j = 0; j < dinosaurs.length; j++) {
  console.log(dinosaurs[j])
}

dinosaurs[0] = "Tyrannosaurus-Rex"
console.log(dinosaurs[0])

dinosaurs[13] = 'Philosoraptor'
console.log(dinosaurs[13])
dinosaurs[10] = 3
dinosaurs[11] = ['Pterosaur','Stegosaurus',3627.5]

console.log(dinosaurs[11])
console.log(dinosaurs[11][1])

dinosaurs.push("Cat")

dinosaurs[12] = ['Yako','Wako','Dot']
console.log(dinosaurs)
console.log(dinosaurs.length)

var favouredVariable = dinosaurs.pop();
// console.log("They pushed me, how you like me now? " + favouredVariable);
dinosaurs.unshift(favouredVariable);
console.log("Here are the dinosaurs: " + dinosaurs)

var domesticAnimals = [];
domesticAnimals.unshift(dinosaurs.shift());

console.log(dinosaurs)
domesticAnimals.push("Oscar");
domesticAnimals.push("Bugz");
domesticAnimals.push("Dusty");
domesticAnimals.push("Arthur");

console.log("Here are the domesticAnimals: " + domesticAnimals + "\n")

var bothGroups = dinosaurs.concat(domesticAnimals);

console.log("Here's both groups concatenated: ")

for (var i = 0; i < bothGroups.length; i++) {
  console.log(bothGroups[i]);
}
