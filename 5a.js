//sceleton code
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log( word+" "  +  second+" "  +  third+" "  +  fourth+" " + fifth+" " + sixth+" " + seventh );

//Index Accessing - 1 by 1

var word = 'you are so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6];
var thirdWord  = word[8] + word[9];
var fourthWord = word[11] + word[12] + word[13] + word[14];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);

//Breaking Sentence (Again) using Substring
var word = 'you are so cool';
var firstWord = word.substring(0, 3);
var secondWord = word.substring(4, 7);
var thirdWord  = word.substring(8, 10);
var fourthWord = word.substring(11, 15);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);

//Breaking Sentence (yet Again) and Count Each Length
var word = 'you are so cool';
var firstWord = word.substring(0, 3);
var secondWord = word.substring(4, 7);
var thirdWord  = word.substring(8, 10);
var fourthWord = word.substring(11, 15);

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;

console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
console.log('second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);

