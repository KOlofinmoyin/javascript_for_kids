var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
  if (input.charAt(i) === "a") {
    output += 4
  }else if (input.charAt(i) === "e") {
    output += 3
  }else if (input.charAt(i) === "i") {
    output += 1
  }else if (input.charAt(i) === "o") {
    output += 0
  }else {
    output += input[i]
  }
}
console.log(output);
