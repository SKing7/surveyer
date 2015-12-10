import React from 'react';
import PsdLayer from './PsdLayer';
import Util from '../lib/util';

var PsdGroup = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  render: function () {
    var props = this.props;
    var data = props.data;
    var style;
    var children;
    var groupDefaultStyles = {
      marginLeft: 10,
      marginTop: 10,
      float: 'left',
      padding: 10,
      backgroundColor: '#fff',
      overflow: 'hidden',
      border: '1px solid #ddd'
    };

    if (!data) return <div></div>;
    data = JSON.parse(data);
    children = data.children;
    return (
      <div>
        {children.map(function(child, key) {
        if (child.type === 'group' && child.children && child.children.length > 0) {
          return (
          <div key={'group_' + key} style={groupDefaultStyles}>
            <div>{child.name}</div>
            <PsdGroup data={JSON.stringify(child)}/>
          </div>);
        } else if (child.type === 'layer'){
          return (<div key={'layer_' + key} style={groupDefaultStyles}>
          <PsdLayer key={key} data={JSON.stringify(child)}/>
          </div>);
        }
        })}
      </div>
    );
  }
});

export default PsdGroup;
