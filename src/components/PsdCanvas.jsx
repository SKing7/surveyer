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
    var source = this.props.psd;
    $.get(source, function (result) {
      this.setState({
        data: JSON.stringify(result)
      });
    }.bind(this));
  }
});

export default PsdCanvas;
