class Vampire {
  constructor(name, pet="bat") {
    this.name = name
    this.pet = pet
    this.thirsty = true
    this.ouncesDrank = 0
    this.full = false
  }

  drink() {
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10
      this.thirsty = false
      this.full = true
    } else {
      return "I'm too full to drink anymore!"
    }
  }
}

module.exports = Vampire