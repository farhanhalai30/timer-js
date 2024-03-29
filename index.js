class Timer {
  constructor(timerOptions) {
    this.time = timerOptions.time;
    this.currentTime = this.time;
    this.onTick = timerOptions.onTick;
    this.onEnd = timerOptions.onEnd;
  }

  start() {
    this.timerClock = this.init();
  }

  pause() {
    if (this.timerClock) {
      clearInterval(this.timerClock);
    }
  }

  tickASec() {
    // console.log("Tick a sec");
    const { min, sec } = this.currentTime;
    if (sec === 0) {
      if (min === 0) {
        // Clear the timer
        clearInterval(this.timerClock);
        this.currentTime = this.time; // Reset the timer
        this.onEnd();
        return -1;
      }
      this.currentTime = {
        min: min - 1,
        sec: 59
      };
      return;
    }
    this.currentTime = {
      ...this.currentTime,
      sec: sec - 1
    };
    return;
  }

  onEverySec() {
    if (this.tickASec() !== -1) {
      this.onTick(this.currentTime);
    }
  }

  init() {
    const ONE_SEC = 1000;
    return setInterval(this.onEverySec.bind(this), ONE_SEC);
  }
}
