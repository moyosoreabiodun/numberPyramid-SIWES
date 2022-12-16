// function generatePyramid(){
//     var numberOfRows = 5;
    
//     for (var i = 1; i <= numberOfRows; i++) {
//         var output = '';
//         // for (var k = numberOfRows - i + 1; k >=1; k--) {
//         //     output += k + ' ';
//         // }
//         for (var j = i - 1; j< numberOfRows; j++) {
//             output += ' ';
//         }
//         for (var k = numberOfRows - i + 1; k >=1; k--) {
//             output += k + ' ';
//         }
//         console.log(output);
//     }
// }

function generatePyramid(){
    var numberOfRows = 5;
    
    for (var i = numberOfRows; i >= 1; i--) {
        var output = '';
        for (var k = numberOfRows - i; k > 0; k--) {
            output +='  ';
        }
         for (var j = i ; j> 0; j--) {
             output += j + ' ';
         }
        // for (var k = numberOfRows - i + 1; k >=1; k--) {
        //     output += k + ' ';
        // }
        console.log(output);
    }
}

// console.log("i am linked");
generatePyramid();
