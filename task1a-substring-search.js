// Task 1a: Etsi 'paja' merkkijonosta

const mystinenSana = "asuntokionapajaa";
let uusiMuutuja;

if(mystinenSana.indexOf("paja") !== -1) {
  uusiMuutuja = "paja";

  console.log("Origin string", mystinenSana);
  console.log("Substring found:", uusiMuutuja);
} else {
  console.log("Sanaa ei löytynyt"), mystinenSana;
    console.log("Substring not found"), uusiMuutuja;
} 
    
     