var name = ["Peter", "Paul", "Mary", "John", "Jam", "Jane"];
var tinyFriend = function (name) {
    var tiny = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName.length < tiny.length) {
            tiny = currentName;
        }
    }
    return tiny;
}
var result = tinyFriend(name);
console.log(result);