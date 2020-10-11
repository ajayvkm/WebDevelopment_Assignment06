var intValue1 = parseInt(window.prompt("Enter first interger value!"));
var intValue2 = parseInt(window.prompt("Enter second interger value!"));

if (isNaN(intValue1) || isNaN(intValue2)) {
    document.write("Invalid Input");
}
else if (intValue1 === intValue2) {
    document.write("Both the numbers are equal");
}
else {
    document.write("The larger number is " + (intValue1 > intValue2 ? intValue1 : intValue2));
}