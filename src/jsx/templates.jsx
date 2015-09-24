var BpmTable = React.createClass({
  propTypes: {
    initialBpm: React.PropTypes.number.isRequired,
    initialTimingTaps: React.PropTypes.number.isRequired,
  },
  getInitialState: function () {
    return {
      bpm: this.props.initialBpm,
      timingTaps: this.props.initialTimingTaps,
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
  },
});

var initialBpm = 120;
var initialTimingTaps = 20;

var bpmTable = React.render(
  <BpmTable initialBpm={initialBpm} initialTimingTaps={initialTimingTaps} />,
  document.getElementById("content")
);
