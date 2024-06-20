export default class NotificationMessage {
  static currVisibleComponent;
  constructor(message, { duration = 2000, type = "success" }) {
    this.message = message;
    this.duration = duration;
    this.type = type;
  }

  show() {
    if (this.type === "sucess") this.type = "error";
    if (NotificationMessage.currVisibleComponent) {
      NotificationMessage.currVisibleComponent.hide();
    }
    NotificationMessage.currVisibleComponent = this;
    document.body.append(this);
  }

  hide() {}
}
