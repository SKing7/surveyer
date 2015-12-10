import React from 'react';
import Row from './Row';
//import _ from 'lodash';
import Util from '../lib/util';

var Panel = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  render: function () {
    var props = this.props;
    var title = props.title;
    var content = props.content;

    if (!title) return <div></div>;
    return this.getPanel(title, content);
  },
  getPanel: function (title, content) {
    var wrapperStyles = {
      display: 'inline-block',
      backgroundColor: '#fff',
      border: '1px solid transparent',
      borderRadius: 4,
      boxShadow: '0 1px 1px rgba(0,0,0,.05)',
      borderColor: '#d6e9c6'
    };
    var headStyles = {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottom: '1px solid transparent',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      color: '#3c763d',
      backgroundColor: '#dff0d8',
      borderColor: '#d6e9c6'
    };
    var titleStyles = {
      marginTop: 0,
      marginBottom: 0,
      fontSize: 16,
      color: 'inherit'
    };
    var bodyStyles = {
      padding: 15
    };

    content.font = JSON.stringify(Util.formatFontText(content.font));

    return (
      <div style={wrapperStyles}>
        <div style={headStyles}>
          <h3 style={titleStyles}>{title}</h3>
        </div>
        <div style={bodyStyles}>
          <div>Font</div>
          <Row data={content.font}/>
        </div>
      </div>
    );
  }
});

export default Panel;
