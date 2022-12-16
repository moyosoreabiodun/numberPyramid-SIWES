function generatePyramid(){
    var numberOfRows = 5;
    
    for (i = 1; i<= numberOfRows; i++){
        var output = '';
        for (space = 0; space <= i - 1; space++){
            output += ' ';
        }
        for (number = 1; number <= numberOfRows - i + 1; number++){
            output += ' ' + number + ' ';
        }
        console.log(output);
    }

}

generatePyramid();