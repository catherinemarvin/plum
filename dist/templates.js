var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function () {
    return (
      React.createElement("p", null, "Hello")
    );
  }
});

React.render(
  React.createElement(HelloWorld, null),
  document.getElementById("content")
)
