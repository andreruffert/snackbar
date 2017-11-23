class Snackbar {
  constructor() {
    this.view = document.body.appendChild(document.createElement('div'));
    this.view.classList.add('snackbar');
    this.isActive = false;
    this.queue = [];
    this.gap = 250;
    this.duration = 5000;
  }

  show(message) {
    if (this.isActive) {
      this.queue.push(message);
      return;
    }
    this.isActive = true;
    this.view.textContent = message;
    this.view.classList.add('snackbar--visible');
    this.queue.shift();
    setTimeout(() => this.hide(), this.duration);
  }

  hide() {
    this.isActive = false;
    this.view.classList.remove('snackbar--visible');

    if (this.queue.length) {
      setTimeout(() => this.show(this.queue[0]), this.gap);
    }
  }
}

export default Snackbar;
