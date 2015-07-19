var React = require('react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>Isomorphic JavaScript for the win</title>
          <link rel="stylesheet" type="text/css" href="/bower_components/sass-bootstrap/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/bower_components/sass-bootstrap/dist/css/bootstrap-theme.min.css" />
        </head>
        <body>
            <div id='view' dangerouslySetInnerHTML={{__html: this.props.body}} />
        </body>
        <script language="javascript" type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
        <script language="javascript" type="text/javascript" src="/bower_components/sass-bootstrap/dist/js/bootstrap.min.js"></script>
        <script language="javascript" type="text/javascript" src="/bower_components/react/react.min.js"></script>
        <script language="javascript" type="text/javascript" src="/jsx/index.js"></script>
      </html>
    );
  }
});

module.exports = Html;
