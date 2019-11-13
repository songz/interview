doc.onclick = (e) => {
  const person = new Person(e.clientX, e.clientY)
  people.push(person)
}

const people = []
if (Warrior) {
  console.log(Warrior)
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
