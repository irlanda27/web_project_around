export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = containerSelector;
  }

  render() {
    this.renderer(this.items);
    this.items.forEach(this.renderer);
  }

  addItem() {
    this.containerSelector.prepend(this.renderer());
  }
}
