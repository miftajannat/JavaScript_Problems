var business = 550;
var minister = 450;
var sochib = 550;
if (business > minister) {
    if (business > sochib) {
        console.log("Business is bigger");
    }
    else {
        console.log("Sochib is bigger");
    }
}
else {
    if (minister > sochib) {
        console.log("Minister is bigger");
    }
    else {
        console.log("Sochib is bigger");
    }
}


var business = 550;
var minister = 450;
var sochib = 950;
var max = Math.max(business, minister, sochib);
console.log(max);

