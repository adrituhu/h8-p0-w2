var pakaian=prompt ("Masukkan jumlah pakaian");
pakaian=parseInt(pakaian);
if(pakaian < 20) {
  console.log("pakaian belum masuk semuanya");
}
else {
  if(pakaian == 20) {
    console.log(" pakaian sebanyak " + pakaian + " sudah masuk semuanya");
  }
  else {
    console.log("Mesin hanya mampu menampung 20 pakaian .");
  }
}