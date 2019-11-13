class Warrior extends Person {
  constructor(x, y, direction = DOWN) {
    super(x, y, direction);
    this.setType("warrior");
  }
}
