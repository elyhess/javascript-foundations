class LunchBox {
  constructor(data) {
    this.owner = data.owner
    this.material = data.madeOf
    this.shape = data.shape
    this.color = data.color
    this.snacks = []
  }

  acquireSnack(snack) {
    snack.isInLunchBox = true
    this.snacks.push(snack)
  }

  findHealthySnacks() {
    const container = [];
    this.snacks.forEach(item => {
      if (item.checkForHealthy()) {
        container.push(item.type)
      }
    });
    return container
  }
}

module.exports = LunchBox;
