/*
Complete the function that takes a string as an input, and return a list of all the unpaired characters 
(i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

In case of multiple appearances to choose from, take the last occurence of the unpaired character.

Notes:

A wide range of characters is used, and some of them may not render properly in your browser.
Your solution should be linear in terms of string length to pass the last test.
Examples
"Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
"Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
"woowee"        -->  []
"wwoooowweeee"  -->  []
"racecar"       -->  ["e"]
"Mamma"         -->  ["M"]
"Mama"          -->  ["M", "m"]
*/

const oddOneOut = (str) => {
  let arr = [];
  let obj = {};

  for(let i = 0; i < str.length; i++){
     if(obj[str[i]] === undefined) {
      obj[str[i]] = {times: 1, index: i};
     } else {
      obj[str[i]].times += 1;
      obj[str[i]].index = i;
     }
  }

  for(let j = 0; j < str.length; j++) {
   if(obj[str[j]].times % 2 !== 0 && obj[str[j]].index === j) {
      arr.push(str[j]);
     }
  }

  return arr;
}
