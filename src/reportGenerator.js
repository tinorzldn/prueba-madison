var fs = require('fs');
var path = require('path');

var readFileData = require('./utils').readFileData;
var stringDataInLinesToArray = require('./utils').stringDataInLinesToArray;
var countConcurrences = require('./utils').countConcurrences;
var findAnagram = require('./utils').findAnagram;

var generateReport = function (inputFileName, wordlistFileName, reportFileName) {
  console.log('Generando informe...');

  if (fs.existsSync(path.join(__dirname, reportFileName))) {
    fs.unlinkSync(path.join(__dirname, reportFileName));
  }

  var text = readFileData(inputFileName);
  var words = readFileData(wordlistFileName);

  var csvLines = [];
  var wordsArray = stringDataInLinesToArray(words, '\n');
  wordsArray.forEach(function(word, index) {
    var numOcurrences = countConcurrences(text, word);
    if (numOcurrences > 0) {
      var anagram = findAnagram(wordsArray, word);
      csvLines.push([word, numOcurrences, anagram ? 'si(' + anagram + ')' : 'no']);
    }
  });

  var csvData = '';
  var csvLinesLength = csvLines.length;
  csvLines.forEach(function(csvLine, index){
     lineString = csvLine.join(",");
     csvData += index < csvLinesLength ? lineString + '\n' : lineString;
  });

  fs.writeFile(path.join(__dirname, reportFileName), csvData, 'utf8', function (err) {
    if (err) {
      console.log(err.message);
    } else{
      console.log('Informe creado correctamente! (' + path.join(__dirname, reportFileName) + ')');
    }
  });
}

generateReport('input.txt', 'wordlist.txt', 'informe.csv');
