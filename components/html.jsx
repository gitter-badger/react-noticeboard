var React = require('react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>Isomorphic JavaScript for the win</title>
        </head>
        <body>
            <div id='view' dangerouslySetInnerHTML={{__html: this.props.body}} />
        </body>
      </html>
    );
  }
});

module.exports = Html;
