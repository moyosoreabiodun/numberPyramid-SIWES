function generatePyramid(){
  var numberOfRows = 5;
  var output = '';

  for(var i = 1; i<= numberOfRows; i++){
      for(var j = numberOfRows - i + 1; j >= 1; j--){
          output += j + ' ';
      }
      console.log(output);
      output = '';
  }
}

generatePyramid();
