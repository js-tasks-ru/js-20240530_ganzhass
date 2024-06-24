export default class NotificationMessage {
  static currVisibleComponent;

  constructor(message = "", { duration = 2000, type = "success" }) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    this.element = this.createElement();
    // console.log("element", this.element.outerHTML);
  }

  createElement() {
    const element = document.createElement(`div`);
    element.setAttribute("class", "notification inner-wrapper");
    element.innerHTML = `
    <div class = "notification ${this.type}">
      <div class = 'timer' style="--value: ${this.t}"><div style="--value: 50"></div></div>
      <div class="notification-header">Notification</div>
      <div class="notification-body">${this.message}</div>}
    </div>
    `;
    // console.log("element.outer", element.outerHTML);
    // console.log("element.firstElementChild", element.firstElementChild);
    return element.firstElementChild;
  }

  show(container = document.body) {
    console.log("this.element.className", this.element.className);

    if (NotificationMessage.currVisibleComponent) {
      NotificationMessage.currVisibleComponent.destroy();
    }
    NotificationMessage.currVisibleComponent = this;
    // console.log(this.duration);
    let dt = new Date().getTime();
    this.t = setInterval(function () {
      // console.log(
      //   "показываем в консоли сколько прошлo = ",
      // this.duration
      // (this.duration - new Date().getTime() - dt)
      // );
    }, this.duration / 10);

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
