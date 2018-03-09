//1
var nama=prompt ("input your name");
function tampilkan(nama) {
  console.log(" hallo " + nama);
}

tampilkan(nama);

//2
function hasilkali( nilai1, nilai2) {
return num1 * num2;
}

var num1 = prompt ("input your first value");
var num2 = prompt ("input your first value");

var hasilPerkalian = hasilkali(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//3
function processSentence(a,b,c,d) {
return "Nama Saya "+a+", Umur saya "+b+" Tahun, alamat saya di "+c+" dan saya punya hobby yaitu "+d+"!";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

