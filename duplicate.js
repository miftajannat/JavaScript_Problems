// var name = [3, 6, 3, 4, 7, 6, 9, 5, 4, 6];
// var uniqueName = [];
// for (var i = 0; i < name.length; i++) {
//     var element = name[i];
//     var index = uniqueName.indexOf(element);
//     if (index == -1) {
//         uniqueName.push(element);
//     }
// }
// Console.log(uniqueName);

var name = [3, 6, 3, 4, 7, 6, 9, 5, 4, 6];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);