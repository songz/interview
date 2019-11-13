const doc = document.querySelector('.content')

const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3

const getDir = (cst) => {
  if (cst === UP) return 'up'
  if (cst === RIGHT) return 'right'
  if (cst === DOWN) return 'down'
  return 'left'
}

class Person {
  constructor (x, y, direction = DOWN) {
    this.container = document.createElement('div')
    this.container.className = 'characterContainer'
    doc.appendChild(this.container)

    this.x = x
    this.y = y
    this.type = 'monster'
    this.direction = direction

    this.render()
  }
  render () {
    this.container.style.top = `${this.y}px`
    this.container.style.left = `${this.x}px`
    const attacking = this.isAttacking ? 'attack' : ''
    this.container.innerHTML = `
    <div class="character ${this.type} ${attacking} ${getDir(this.direction)}" />
    `
  }
  setDir (direction) {
    this.direction = direction
    this.render()
  }
  setType (newType) {
    this.type = newType
    this.render()
  }
  moveUp () {
    this.y = this.y - 64
    this.container.style.top = `${this.y}px`
  }
  moveDown () {
    this.y = this.y + 64
    this.container.style.top = `${this.y}px`
  }
  moveLeft () {
    this.x = this.x - 64
    this.container.style.left = `${this.x}px`
  }
  moveRight () {
    this.x = this.x + 64
    this.container.style.left = `${this.x}px`
  }
  attack () {
    this.isAttacking = true
    this.render()
    setTimeout(() => {
      this.isAttacking = false
      this.render()
    }, 500)
  }
}

doc.onclick = (e) => {
  const person = new Person(e.clientX, e.clientY)
  people.push(person)
}

const people = []
if (window.Warrior) {
  people.push(new Warrior(300, 400))
} else {
  people.push(new Person(100, 200, DOWN))
  people.push(new Person(200, 300, UP))
}

const inputText = document.querySelector('.inputText')
inputText.onkeyup = (e) => {
  if (e.key === 'ArrowUp') {
    people[0].setDir(UP)
    return people[0].moveUp()
  }
  if (e.key === 'ArrowDown') {
    people[0].setDir(DOWN)
    return people[0].moveDown()
  }
  if (e.key === 'ArrowLeft') {
    people[0].setDir(LEFT)
    return people[0].moveLeft()
  }
  if (e.key === 'ArrowRight') {
    people[0].setDir(RIGHT)
    return people[0].moveRight()
  }
  if (e.key === 'a') {
    people[0].attack()
  }
  inputText.value = ''
  console.log(e)
}
inputText.focus()
