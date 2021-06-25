// class dog {
//   constructor(name, breed) {
//     this.name = name
//     this.breed = breed
//   }
// }

// let bigFluffyDog1 = new dog('Buzz', 'greatPyrenees')
// let bigFluffyDog2 = new dog('Woody', 'labrador')

class Breakfast {
  constructor(food, drink) {
    this.food = food
    this.drink = drink
  }
}

let newBreakfast = new Breakfast('pancake', 'orangeJuice')

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

let newLunch = new Lunch('greek', 'lentil', 'coffee')

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
}

let newDinner = new Dinner('chef', 'tomato', 'cauliflower steak', 'milkshake')