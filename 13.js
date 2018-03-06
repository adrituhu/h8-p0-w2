function xo(str) {
  var nilai = str.substring(0, 1);
    if(nilai=="x"){
   return "true";
    }
    if(nilai=="o"){
    return "False";
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true