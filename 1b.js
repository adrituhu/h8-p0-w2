var tahun=prompt ("Masukkan nilai tahun");
tahun=parseInt(tahun);
 if(tahun % 4 == 0) {
   if(tahun % 4 == 100) {
     if(tahun % 4 == 400) {
        console.log(" tahun " + tahun + " adalah tahun kabisat. ");
       }
       else
      console.log(" tahun " + tahun + " adalah tahun tahun kabisat. ");
   }
   else
  console.log(" tahun " + tahun + " adalah tahun tahun kabisat. ");
   }
  else
 console.log(" tahun " + tahun + " adalah bukan tahun kabisat. ");