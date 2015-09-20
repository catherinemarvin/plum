$(document).ready(function () {
  let bpmCounter = new BpmCounter();

  $(document.body).on("keydown", function () {
    bpmCounter.tick();
    bpmTable.setProps({
      bpm_info: {
        bpm: bpmCounter.bpm,
        timingTaps: bpmCounter.numTaps,
      },
    });
  });
});
