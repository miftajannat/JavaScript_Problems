var a = 5;
var b = 9;
console.log("before swap: a =", a, "b =", b);

var a = 9;
var b = 5;
console.log("before swap: a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);


var x = 5;
var y = 9;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);


var p = 5;
var q = 9;
[p, q] = [q, p];
console.log("after swap: p=", p, "q =", q);