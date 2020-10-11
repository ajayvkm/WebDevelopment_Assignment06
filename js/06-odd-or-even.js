var counter;
for (counter = 0; counter < 16; counter++) {
    var result = counter % 2 == 0 ? 'even' : 'odd';
    console.log(counter + ' is ' + result);
}