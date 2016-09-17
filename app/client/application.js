import React from 'react';
import ReactDOM from 'react-dom';

function application () {
  const div = document.querySelector('[data-js="app_main"]');
  if (div) {
    ReactDOM.render(
      <div id="kitter">
        Hello Maddie.
      </div>, div
    );
  }
};

application();
