// Task 4: Luo Flower-luokka ja muuta ominaisuuksia

// Define the Flower class
class Flower {
  constructor(type, color, amount, inStore) {
    this.type = type;
    this.color = color;
    this.amount = amount;
    this.inStore = inStore;
  }

  // Method to change color
  changeColor(newColor) {
    this.color = newColor;
  }

  // Method to change amount
  changeAmount(newAmount) {
    this.amount = newAmount;
  }

  // Method to toggle inStore value (true ↔ false)
  toggleInStore() {
    this.inStore = !this.inStore;
  }

  // Method to output object in desired format
  toString() {
    let storeStatus = this.inStore ? "Yes" : "No";
    return `Flower { Type: '${this.type}', Color: '${this.color}', Amount: ${this.amount}, inStore: ${storeStatus} }`;
  }
}

// === USAGE EXAMPLE ===

// 1) Create new flower object
const myFlower = new Flower("Rose", "Red", 5, true);
console.log("1) After created:", myFlower.toString());

// 2) Make changes
myFlower.changeColor("Yellow");
myFlower.changeAmount(3);
myFlower.toggleInStore();

console.log("2) After changed:", myFlower.toString());
