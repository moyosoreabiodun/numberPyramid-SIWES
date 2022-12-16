function generatePyramid(){
    var numberOfRows = 5;
    
    for (i = 1; i<= numberOfRows; i++){
        var output = '';
        for (space = 0; space < numberOfRows - i; space++){
            output += ' ';
        }
        for (number = 1; number <= i; number++){
            output += ' ' + number + ' ';
        }
        console.log(output);
    }

}

generatePyramid();