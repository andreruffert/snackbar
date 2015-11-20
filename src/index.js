import Snackbar from './snackbar';

let instance;

function snackbar() {
  if (!instance) {
    instance = new Snackbar();
  }
  return instance;
}

module.exports = snackbar();
