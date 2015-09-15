class BpmCounter {
  constructor() {
    this.numTaps = 0;
    this.bpm = 0;
    this.lastTappedTime = new Date();
  }

  restart() {
    this.numTaps = 0;
    this.bpm = 0;
    this.lastTappedTime = new Date();
  }

  tick() {
    this.numTaps++;

    let currentTime = new Date();

    let timeDifferenceInMS = currentTime - this.lastTappedTime;

    this.bpm = this.numTaps / (timeDifferenceInMS / 1000);
  }
}
