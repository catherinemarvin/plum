var BpmTable = React.createClass({
  propTypes: {
    initialBpm: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    initialTimingTaps: React.PropTypes.number.isRequired,
  },
  getInitialState: function () {
    return {
      bpm: this.props.initialBpm,
      timingTaps: this.props.initialTimingTaps,
      startTapTime: null,
    };
  },
  componentDidMount: function () {
    $(document.body).on("keydown", this.tick);
  },
  componentWillUnmount: function () {
    $(document.body).off("keydown", this.tick);
  },
  render: function () {
    return (
      <div>
        <p>BPM: {this.state.bpm}</p>
        <p>Timing Taps: {this.state.timingTaps }</p>
      </div>
    );
  },
  tick: function () {
    var startTapTime = this.state.startTapTime;

    if (!startTapTime) {
      startTapTime = new Date();
    }

    var timingTaps = this.state.timingTaps + 1;

    var currentTime = new Date();

    var timeDifferenceInMS = currentTime - startTapTime;

    var bpm;
    if (timeDifferenceInMS === 0) {
      bpm = "First Tap";
    } else {
      bpm = Math.round(timingTaps / (timeDifferenceInMS / 1000) * 60);
    }

    this.setState({
      bpm: bpm,
      timingTaps: timingTaps,
      startTapTime: startTapTime,
    });
  },
});

var initialBpm = "Tap to begin!";
var initialTimingTaps = 0;

var bpmTable = React.render(
  <BpmTable initialBpm={initialBpm} initialTimingTaps={initialTimingTaps} />,
  document.getElementById("content")
);
