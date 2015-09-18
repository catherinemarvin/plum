$(document).ready(function () {
  let bpmCounter = new BpmCounter();

  $(document.body).on("keydown", function () {
    console.log("Keydown!");
    bpmCounter.tick();

    console.log(bpmCounter);

    console.log(bpmTable);
    bpmTable.setProps({
      bpm_info: {
        bpm: bpmCounter.bpm,
        timingTaps: bpmCounter.numTaps,
      },
    });
  });
});
