var BpmTable = React.createClass({
  render: function () {
    return (
      <div>
        <p>BPM: {this.props.bpm_info.bpm}</p>
        <p>Timing Taps: {this.props.bpm_info.timingTaps }</p>
      </div>
    );
  }
});

var BPM_INFO = {
  bpm: 120,
  timingTaps: 20,
};

React.render(
  <BpmTable bpm_info={BPM_INFO} />,
  document.getElementById("content")
);
