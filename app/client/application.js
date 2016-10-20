import React from 'react';
import ReactDOM from 'react-dom';
import RealApp from './real_app';

function application () {
  const div = document.querySelector('[data-js="app_main"]');
  if (div) {
    ReactDOM.render(
      <RealApp />, div
    );
  }
};

application();
