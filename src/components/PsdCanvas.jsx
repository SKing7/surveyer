import React from 'react';
import $ from 'jquery';
import PsdGroup from './PsdGroup';

var PsdCanvas = React.createClass({
  getInitialState: function () {
    return {data: ''};
  },
  render: function () {
    return (
      <div>
        <PsdGroup data={this.state.data}/>
      </div>
    );
  },
  componentDidMount: function () {
    var source = 'http://127.0.0.1:3000/api/get/psd?url=test.psd';
    $.get(source, function (result) {
      this.setState({
        data: JSON.stringify(result)
      });
    }.bind(this));
  }
});

export default PsdCanvas;
