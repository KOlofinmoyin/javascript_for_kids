
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

var domesticAnimal = domesticAnimals[Math.floor(Math.random() * domesticAnimals.length)]

console.log("Here are the domesticAnimals: " + domesticAnimals + "\n")

var bothGroups = dinosaurs.concat(domesticAnimals);

console.log("Here's both groups concatenated: ")

for (var i = 0; i < bothGroups.length; i++) {
  console.log(bothGroups[i]);
}

console.log(bothGroups.indexOf(3));


console.log(bothGroups.join(" * "));

var randomWords = ['Explosion', 'Cave', 'Princess', 'Pen'];

var randomNumber = Math.floor(Math.random(1)*randomWords.length);

console.log(randomWords[randomNumber]);

var phrases = ['That sounds good', 'Yes, you should definitely do that', "I'm not sure that's a great idea", "Maybe not today?", "Computer says no."]
var randomNumber2 = Math.floor(Math.random(1)*phrases.length);
console.log(phrases[randomNumber2]);

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomAdjective = randomAdjectives[Math.floor(Math.random(1) * randomAdjectives.length)];

var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
var randomWord = randomWords[Math.floor(Math.random(1) * randomWords.length)];

console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}.`);

var animalBodyParts = ["tail", "claws", "wing", "beak", "fur", "fins", "shell", "feathers"]
var animalBodyPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

var randomInsults = ["Your",randomBodyPart,"is","more",randomAdjective,"than a",domesticAnimal+"'s",animalBodyPart]
console.log(randomInsults.join(" "));

var Arthur = {"legs":3,"name":"Arthur", "color":"white"}
console.log(Arthur);
