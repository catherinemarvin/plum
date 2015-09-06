class BpmCounter {
  constructor() {
    this.numTaps = 0;
    this.bpm = 0;
  }

  start() {
    console.log("Starting timer");
    this.numTaps = 1;

    this.lastTappedTime = new Date();
  }

  tick() {
    console.log("Tick!");
    this.numTaps++;

    let currentTime = new Date();

    let timeDifferenceInMS = currentTime - this.lastTappedTime;

    this.bpm = this.numTaps / (timeDifferenceInMS / 1000);
    console.log("Tock!");
  }
}
