let str1='abcdefg';
let str2='badcegf';
let str3='sdskdn';

String.prototype.isAnagram=function(str){
    if(this.length!==str.length) return false;
    return this.split('').sort().join('')==str.split('').sort().join('')?true:false;
}

//should return true
console.log(str1.isAnagram(str2))

//should return false
console.log(str1.isAnagram(str3))