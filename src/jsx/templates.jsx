$(document).ready(function () {
  var BpmTable = React.createClass({
    propTypes: {
      initialBpm: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
      ]).isRequired,
      initialTimingTaps: React.PropTypes.number.isRequired,
      initialSecondsToReset: React.PropTypes.number.isRequired,
    },
    getInitialState: function () {
      return {
        bpm: this.props.initialBpm,
        timingTaps: this.props.initialTimingTaps,
        startTapTime: null,
        secondsToReset: this.props.initialSecondsToReset,
        lastTapTime: null,
      };
    },
    componentDidMount: function () {
      $(document.body).on("keypress", this.tick);
    },
    componentWillUnmount: function () {
      $(document.body).off("keypress", this.tick);
    },
    render: function () {
      return (
        <div>
          <p>BPM: {this.state.bpm}</p>
          <p>Timing Taps: {this.state.timingTaps}</p>
          <p>Seconds till reset: <input type="number" value={this.state.secondsToReset} onChange={this.handleResetSecondsChange} /></p>
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

      var secondsToReset = this.state.secondsToReset;

      var lastTapTime = this.state.lastTapTime ? this.state.lastTapTime : currentTime;
      var secondsSinceLastTap = currentTime - lastTapTime;
      if (secondsSinceLastTap >= secondsToReset * 1000) {
        this.reset();
        return;
      }

      var bpm;
      if (timingTaps === 1) {
        bpm = "First Tap";
      } else {
        bpm = Math.round(timingTaps / (timeDifferenceInMS / 1000) * 60);
      }

      this.setState({
        bpm: bpm,
        timingTaps: timingTaps,
        startTapTime: startTapTime,
        lastTapTime: currentTime,
      });
    },
    reset: function () {
      var currentTime = new Date();
      this.setState({
        bpm: "First Tap",
        timingTaps: 1,
        startTapTime: currentTime,
        lastTapTime: currentTime,
      });
    },
    handleResetSecondsChange: function (event) {
      this.setState({
        secondsToReset: event.target.value,
      });
    },
  });

  var initialBpm = "Tap to begin!";
  var initialTimingTaps = 0;
  var initialSecondsToReset = 2;

  var About = React.createClass({
    render: function () {
      return (
        <div>About</div>
      );
    }
  });

  var App = React.createClass({
    getInitialState: function () {
      return {
        route: window.location.hash.substr(1),
      }
    },
    componentDidMount: function () {
      var self = this;
      window.addEventListener("hashchange", function () {
        self.setState({
          route: window.location.hash.substr(1),
        });
      });
    },
    render: function () {
      var route = this.state.route;
      console.log(route);

      var element;
      if (route === "/about") {
        element = <About />
      } else {
        element = <BpmTable initialBpm={initialBpm} initialTimingTaps={initialTimingTaps} initialSecondsToReset ={initialSecondsToReset} />
      }

      return (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav pull-right">
                  <li className="active">
                    <a href="#">BPM Counter</a>
                  </li>
                  <li>
                    <a href="#/about">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            {element}
          </div>
        </div>
      )
    },
  });

  React.render(<App />, document.body);
});
