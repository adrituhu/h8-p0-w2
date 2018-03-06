function konversiMenit(menit) {
var a=0;
while(menit>=60){
  menit=menit-60;
  a++;
}
if (menit<10){
  menit=0+""+menit;
}
return a+":"+menit;
}

console.log(konversiMenit(0)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00