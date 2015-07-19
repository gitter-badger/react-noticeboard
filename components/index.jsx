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

var NoticeForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea placeholder="Your notice..." ref="text" />
        <input type="submit" value="Post" />
      </form>
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
        <div>
          <h1>Noticeboard</h1>
          <NoticeForm />
          <div className="noticeList">
            {noticeNodes}
          </div>
        </div>
    );
  }
});

module.exports = Index;
