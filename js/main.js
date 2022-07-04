var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name' , 
  last: 'Last Name'
}
var decimal2 = myNum.toFixed(2);
var i = 0;
var myTest = 20;
myTest += myNum;
myTest -= 10;
myTest *= 2;
myTest /= myNum;
myTest %= 3;

var myPi = Math.PI; 
var myRound = Math.round(89.279);
ar myRandom = Math.random() * 10; 
var myPow = Math.pow(3, 5); 
var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
var isRamaPos = strObj.str.indexOf('рама');
var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');