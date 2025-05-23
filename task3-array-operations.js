// Task 3: Array-operaatiot, kopiointi ja haku

// a) Luo alkuperäinen taulukko
const animals = ["Dog", "Horse", "Cow"];
console.log("Array:", animals);

// Muunna taulukko merkkijonoksi
const animalsStr = animals.join(",");
console.log("ArrayStr:", animalsStr);

// b) Kopioi taulukko Map-funktiolla ja lisää uusia eläimiä
const newAnimals = animals.map(animal => animal); // Kopioi sisältö
newAnimals.push("Cat", "Sheep"); // Lisää uusia alkioita
console.log("New array:", newAnimals);

// c) Etsi "Cow" uudesta taulukosta
const searchWord1 = "Cow";
if (newAnimals.includes(searchWord1)) {
    console.log(`Search result: ${searchWord1}, Founded`);
} else {
    console.log(`Search result: ${searchWord1}, Not founded`);
}

// d) Testaa sana jota ei löydy
const searchWord2 = "CowS";
if (newAnimals.includes(searchWord2)) {
    console.log(`Search result: ${searchWord2}, Founded`);
} else {
    console.log(`Search result: ${searchWord2}, Not founded`);
}
