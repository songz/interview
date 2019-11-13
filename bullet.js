const doc = document.querySelector(".content");

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

const getDir = cst => {
  if (cst === UP) return "up";
  if (cst === RIGHT) return "right";
  if (cst === DOWN) return "down";
  return "left";
};
class Bullet {
  constructor(x, y, direction = DOWN) {
    this.container = document.createElement("div");
    this.container.className = "characterContainer";
    doc.appendChild(this.container);

    this.x = x;
    this.y = y + 90;
    this.direction = direction;

    this.render();

    let interval;
    interval = setInterval(() => {
      if (this.direction == RIGHT) {
        this.x += 64;
      }
      this.render();
    }, 100);
  }
  render() {
    this.container.style.top = `${this.y}px`;
    this.container.style.left = `${this.x}px`;
    this.container.innerHTML = `<div class="bullet"></div>`;
  }
}
