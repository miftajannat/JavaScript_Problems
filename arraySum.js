var num = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for (var i = 0; i < num.length; i++) {
    var element = num[i];
    sum = sum + element;
}
console.log("Total of the numbers: ", sum);
//Total of the numbers:  322


function arraySum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        var element = n[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65, 55, 66, 77, 88, 99, 100];
var result = arraySum(numbers);
console.log("Total of the numbers: ", result);
//Total of the numbers:  807
var total = arraySum([12, 3, 54, 65, 55, 66, 77, 88, 99, 100]);
console.log("Total of the numbers: ", total);
//Total of the numbers:  619