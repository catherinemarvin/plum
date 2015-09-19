class BpmCounter {
  constructor() {
    this.numTaps = 0;
    this.bpm = 0;
    this.startTapTime = new Date();
  }

  restart() {
    this.numTaps = 0;
    this.bpm = 0;
  }

  tick() {
    if (this.numTaps === 0) {
      this.startTapTime = new Date();
    }

    this.numTaps++;

    let currentTime = new Date();

    let timeDifferenceInMS = currentTime - this.startTapTime;

    this.bpm = this.numTaps / (timeDifferenceInMS / 1000) * 60;
  }
}
