function generatePyramid() {
    var totalNumberofRows = 5;

    for (var i = 1; i <= totalNumberofRows; i++) {
        var output = '';
        for (var j = totalNumberofRows -1; j >= i; j--) {
            output += '  ';
        }
        for (var k = 1; k <= i; k++) {
            output += k + ' ';
        }
        console.log(output);
        // output = '';
    }
}

generatePyramid();

