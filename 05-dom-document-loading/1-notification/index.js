export default class NotificationMessage {
  static currVisibleComponent;

  constructor(message = "", { duration = 2000, type = "success" }) {
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.element = this.createElement();
  }

  createElement() {
    const element = document.createElement(`div`);

    element.innerHTML = `
    <div class = "notification ${this.type}  inner-wrapper" style="--value: 30">
      <div class = "timer" style="--value: ${this.t}}"></div>
      <div class = "notification-header">Notification</div>
      <div class = "notification-body">${this.message}</div>
    </div>
    `;

    return element.firstElementChild;
  }

  show(container = document.body) {
    if (NotificationMessage.currVisibleComponent) {
      NotificationMessage.currVisibleComponent.destroy();
    }
    NotificationMessage.currVisibleComponent = this;

    let dt = new Date().getTime();
    this.t = setInterval(function () {
      // NOTE: почему:
      // duration = underfined
      // console.log(this.duration);
      // console.log(
      //   "показываем в консоли сколько прошлo = ",
      //   this.duration - new Date().getTime() - dt
      // );
    }, this.duration / 10);
    console.log(this.t);

    this.timerID = setTimeout(() => {
      this.destroy();
    }, this.duration);
    container.appendChild(this.element);
  }
  remove() {
    this.element.remove();
  }
  hide() {}

  destroy() {
    clearTimeout(this.timerID);
    clearInterval(this.t);
    this.remove();
  }
}
