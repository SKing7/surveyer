import React from 'react';
import Util from '../lib/util';
import Panel from './Panel';

var PsdLayer = React.createClass({
  render: function () {
    var props = this.props;
    var data = props.data;
    var rect = props.rect;
    var layerCommonStyles = {
    };

    if (!data) return <div></div>;
    data = JSON.parse(data);

    return (
      <div style={layerCommonStyles}>
        {(() => {
          if (data.text) {
            return <Panel title={data.name} content={data.text} rect={rect}/>
          }
        })()}
      </div>
    );
  }
});

export default PsdLayer;
