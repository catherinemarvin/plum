var BpmTable = React.createClass({displayName: "BpmTable",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "BPM: ", this.props.bpm_info.bpm), 
        React.createElement("p", null, "Timing Taps: ", this.props.bpm_info.timingTaps)
      )
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
