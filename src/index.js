import ReactDOM from 'react-dom';
import React from 'react';
import PsdCanvas from './Components/PsdCanvas';

window.onload = () => {

  var psdSrc = 'http://127.0.0.1:3000/api/get/psd?url=' + getSearchObj().psd + '.psd';
  ReactDOM.render(
    <PsdCanvas psd={psdSrc}/>,
    document.querySelector('#container')
  );
  function getSearchObj() {
    var loc = document.location;
    var searchStr = loc.search;
    var searchKvs;
    var obj = {};

    searchStr = searchStr.slice(1);
    searchKvs = searchStr.split('&');
    searchKvs.forEach(function (v, k) {
      var tmp = v.split('=');
      obj[tmp[0]] = tmp[1];
    });
    return obj;
  }
};
