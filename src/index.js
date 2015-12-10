import ReactDOM from 'react-dom';
import React from 'react';
import PsdCanvas from './Components/PsdCanvas';

window.onload = () => {
  ReactDOM.render(
    <PsdCanvas />,
    document.querySelector('#container')
  );
};
