class Person {
  constructor(x, y, direction = DOWN) {
    this.container = document.createElement("div");
    this.container.className = "characterContainer";
    doc.appendChild(this.container);

    this.x = x;
    this.y = y;
    this.type = "monster";
    this.direction = direction;

    this.health = 100;

    this.render();
  }
  render() {
    this.container.style.top = `${this.y}px`;
    this.container.style.left = `${this.x}px`;
    const attacking = this.isAttacking ? "attack" : "";
    this.container.innerHTML = `
      <h3>Health: ${this.health}</h3><div class="character ${
      this.type
    } ${attacking} ${getDir(this.direction)}"></div>
    `;
  }
  setDir(direction) {
    this.direction = direction;
    this.render();
  }
  setType(newType) {
    this.type = newType;
    this.render();
  }
  moveUp() {
    this.y = this.y - 64;
    this.container.style.top = `${this.y}px`;
  }
  moveDown() {
    this.y = this.y + 64;
    this.container.style.top = `${this.y}px`;
  }
  moveLeft() {
    this.x = this.x - 64;
    this.container.style.left = `${this.x}px`;
  }
  moveRight() {
    this.x = this.x + 64;
    this.container.style.left = `${this.x}px`;
  }
  attack() {
    this.isAttacking = true;
    this.render();
    setTimeout(() => {
      this.isAttacking = false;
      this.render();
    }, 500);
    new Bullet(this.x, this.y, this.direction);
    for (let p of people) {
      if (p != people[0]) {
        if (
          ((this.direction == RIGHT && this.x < p.x) ||
            (this.direction == LEFT && this.x > p.x)) &&
          Math.abs(this.y - p.y) < 50
        ) {
          p.damage(10);
        }
      }
    }
  }
  damage(val) {
    this.health = Math.max(0, this.health - val);
    if (this.health == 0) {
      this.container.remove();
    }
    this.render();
  }
}
