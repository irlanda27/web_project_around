export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  }

  render() {
    this.items.forEach((item) => this.addItem(item));
  }

  addItem(item) {
    this.containerSelector.prepend(this.renderer(item));
  }
}
