var React = require('react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>Isomorphic JavaScript for the win</title>
        </head>
        <body>
            <h1>This is Isomorphic JavaScript in action</h1>
        </body>
      </html>
    );
  }
});

module.exports = Html;
