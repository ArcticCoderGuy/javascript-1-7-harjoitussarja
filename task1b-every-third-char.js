// Task 1b: Lue joka kolmas kirjain ja muokkaa

const mystinenSana = "asuntokionapajaa";
let uusiMuuttuja = "";

// Käydään kaikki merkit läpi
for (let i = 0; i < mystinenSana.length; i++) {
  if (i % 3 === 2) {
    let kirjain = mystinenSana[i];

    if (kirjain === "a") {
      uusiMuuttuja = uusiMuuttuja + "*";
    } else {
      uusiMuuttuja = uusiMuuttuja + kirjain;
    }
  }
}

// Tulostetaan lopputulos isoilla kirjaimilla
console.log("Origin string:", mystinenSana);
console.log("Every 3 letter transformed:", uusiMuuttuja.toUpperCase());
