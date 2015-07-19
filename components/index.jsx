var React = require('react');

var Notice = React.createClass({
  render: function () {
    return (
        <div className="noticeitem">
          {this.props.text}
        </div>
    );
  }
});

var Index = React.createClass({
  render: function () {
    var noticeNodes = this.props.notices.map(function (notice, index) {
      return (
          <Notice key={index} text={notice.text}>
          </Notice>
      );
    });
    return (
        <div className="noticeList">
          {noticeNodes}
        </div>
    );
  }
});

module.exports = Index;
