var BpmTable = React.createClass({
  propTypes: {
    bpm_info: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
      <div>
        <p>BPM: {this.props.bpm_info.bpm}</p>
        <p>Timing Taps: {this.props.bpm_info.timingTaps }</p>
      </div>
    );
  },
  componentDidMount: function () {
    $(document.body).on("keydown", this.handleKeydown);
  },
  componentWillUnmount: function () {
    $(document.body).off("keydown", this.handleKeydown);
  },
  handleKeydown: function (e) {
    console.log(e);
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
