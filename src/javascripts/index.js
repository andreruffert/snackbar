import snackbar from 'snackbar';
import helloHi from './lib/hello-hi';
import days from './lib/days';

function init() {
  setTimeout(() => {
    snackbar.show('Ohai!');
    snackbar.show(`Happy ${days[new Date().getDay()]}.`);
  }, 1000);

  document.querySelector('[data-js-trigger="snackbar"]').addEventListener('click', sayHello);
}

function sayHello() {
  snackbar.show(helloHi());
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    init();
  }
}
