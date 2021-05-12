class Snack {
  constructor(type) {
    this.type = type
    this.deliciousLevel = "extra"
    this.amount = 100
    this.isInLunchBox = false
    this.cuttingItClose = false
  }

  getEaten() {
    this.amount -= 10
    if (this.amount <= 20) {
      this.cuttingItClose = true
    }
  }

  checkForHealthy() {
    return !!(this.type.includes("fruit") || this.type.includes("Fruit"));
  }

}

module.exports = Snack;
