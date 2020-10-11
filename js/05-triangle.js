var xCounter, yCounter;
for (xCounter = 0; xCounter <= 6; xCounter++) {
    for(yCounter = 0; yCounter < xCounter + 1; yCounter++) {
        document.write('#');
        console.log('#');
    }
    document.write('<br>');
    console.log('\n');
}
