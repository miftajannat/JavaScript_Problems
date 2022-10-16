// 2 = Int
// 2.34 = Float

// Path: random.js
var num = 2.456778;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
var dice = Math.random(num);
console.log(result, result2, result3, dice);
// 2 3 2 0.40464140430017004


for (var i = 0; i < 10; i++) {
    var randomNum = Math.random() * 8;
    var output = Math.round(randomNum);
    console.log(output);
}