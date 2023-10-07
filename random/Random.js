export default class Random {
  constructor(seed) {
    this.startSeed = seed;
    this.seed = seed;
  }
  getNext() {
    this.seed += Math.floor(this.seed / 2) ** 2;
    return this.seed;
  }
  reset() {
    this.seed = this.startSeed;
  }
}
