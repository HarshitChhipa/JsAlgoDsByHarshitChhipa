# Find the substring of string provided by user having minimum a^ib^jc^k
```function getSubsequenceOfString(string) {
if(!(string.includes('a') === -1 && string.includes('b') === -1 && string.includes('c') === -1)){
let aCount =0, bCount=0, cCount =0;
let tempArrayOfString = string.split('');
tempArrayOfString.map((alphabet) => {
 switch(alphabet) {
case 'a':
aCount = 1 + 2 * aCount; 
break;
case 'b': 
bCount = aCount + 2 * bCount; 
break;
case 'c': 
cCount = bCount + 2 * cCount;
break;
}
});
 return cCount;
} else {
return 0;
}
}

console.log(getSubsequenceOfString('bbc'));

// abc
// abc
// abbc
```
