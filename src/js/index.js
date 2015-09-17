$(document).ready(function () {
  let bpmCounter = new BpmCounter();

  $(document.body).on("keydown", handleKeyDown);
});

function handleKeyDown () {
  console.log("Key down");
}
