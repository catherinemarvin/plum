var BpmTable = React.createClass({
  propTypes: {
    bpm_info: React.PropTypes.object.isRequired,
  },
  componentDidMount: function () {
    $(document.body).on("keydown", this.handleKeyDown);
  },
  componentWillUnmount: function () {
    $(document.body).off("keydown", this.handleKeyDown);
  },
  render: function () {
    return (
      <div>
        <p>BPM: {this.props.bpm_info.bpm}</p>
        <p>Timing Taps: {this.props.bpm_info.timingTaps }</p>
      </div>
    );
  },
  handleKeyDown: function () {
    console.log("key down");
  },
});

var BPM_INFO = {
  bpm: 120,
  timingTaps: 20,
};

var bpmTable = React.render(
  <BpmTable bpm_info={BPM_INFO} />,
  document.getElementById("content")
);
