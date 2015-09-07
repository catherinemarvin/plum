var BpmTable = React.createClass({
  render: function () {
    return (
      <p>Hello</p>
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
