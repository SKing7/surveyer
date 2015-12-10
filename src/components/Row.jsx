import React from 'react';
import Util from '../lib/util';

var Row = React.createClass({
  render: function () {
    var props = this.props;
    var rows = props.data;
    var keys;
    var keyStyles = {
      marginRight: 5,
      fontSize: 16,
      color: '#333',
    };
    var valueStyles = {
      fontSize: 14,
      color: '#666',
    };
    var wrapperStyles = {
      paddingLeft: 10,
      margin: 0
    };
    var itemStyles = {
      listStylePosition: 'inside'
    };

    rows = JSON.parse(rows);
    keys = Object.keys(rows);

    return (
      <ul style={wrapperStyles}>
      {keys.map(function (k) {
        return <li style={itemStyles}><span style={keyStyles}>{k}:</span><span style={valueStyles}>{JSON.stringify(rows[k])}</span></li>;
      })}
      </ul>
    );
  }
});

export default Row;
