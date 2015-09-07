var BpmTable = React.createClass({displayName: "BpmTable",
  render: function () {
    return (
      React.createElement("p", null, "Hello")
    );
  }
});

var BPM_INFO = {
  bpm: 120,
  timingTaps: 20,
};

React.render(
  React.createElement(BpmTable, {bpm_info: BPM_INFO}),
  document.getElementById("content")
);
