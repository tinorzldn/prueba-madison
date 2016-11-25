var exports = module.exports = {};

var fs = require('fs');
var path = require('path');

exports.readFileData = function (fileName) {
  try {
    return fs.readFileSync(path.join(__dirname, fileName), 'utf8');
  }catch (err) {
    throw err.message;
  }
}

exports.stringDataInLinesToArray = function (stringData) {
  return stringData.toString().split('\n').filter(function (value) {
    return value !== '';
  });
}

exports.countConcurrences = function (targetString, stringToMatch) {
  var regexp = new RegExp(stringToMatch, 'gi');
  var count = (targetString.match(regexp) || []).length;
  return count;
}

exports.findAnagram = function (wordList, wordToCheck) {
  var matchedAnagram = false;
  wordList.forEach(function(word, index) {
    if (isAnagram(word, wordToCheck))
      matchedAnagram = word;
  });
  return matchedAnagram;
}

var isAnagram = function (wordOne, wordTwo) {
  if (wordOne === wordTwo || wordOne.length !== wordTwo.length) {
    return false;
  }
  return wordOne.split('').sort().join('') === wordTwo.split('').sort().join('');
}
