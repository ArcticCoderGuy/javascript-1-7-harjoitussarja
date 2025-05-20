const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function kysyIka() {
  readline.question("Set age between 18 - 22: ", function(input) {
    const age = Number(input);

    if (age >= 18 && age <= 22) {
      switch (age) {
        case 18:
          console.log(age + " : Young Padawan 👶");
          break;
        case 19:
          console.log(age + " : Almost mature 🧑");
          break;
        case 20:
          console.log(age + " : Just right ⚖️");
          break;
        case 21:
          console.log(age + " : Nearly wise 🧠");
          break;
        case 22:
          console.log(age + " : Old 😊");
          break;
      }
      readline.close();
    } else {
      console.log("Invalid age, try again.");
      kysyIka(); // rekursiivinen toisto
    }
  });
}

kysyIka();
