var statement = "Hello World i am a good person";
var reverse = "";
for (var i = 0; i < statement.length; i++) {
    var char = statement[i];
    reverse = char + reverse;
}
console.log(reverse);



function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "I am a good person Hello World ";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("Ki khawa jai");
console.log(foodVlog);