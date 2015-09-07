var HelloWorld = React.createClass({
  render: function () {
    return (
      <p>Hello</p>
    );
  }
});

React.render(
  <HelloWorld />,
  document.getElementById("content")
)
