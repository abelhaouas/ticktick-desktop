'use strict';
const Store = require('electron-store');

module.exports = new Store({
  defaults: {
    windowBounds: { width: 800, height: 600 }
  }
});
