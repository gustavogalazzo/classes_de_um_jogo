class hero {
  constructor(name, type, weapon) {
    this.name = name
    this.type = type
    this.weapon = weapon
  }

  atacar() {
    console.log(
      `O heroi chamado ${this.name}, do tipo ${this.type}, atacou os inimigos com uma ${this.weapon}!`
    )
  }
}

var hero1 = new hero('Dead Sage', 'Guerreiro', 'Espada')
var hero2 = new hero('Merlin', 'Mago', 'Magia')
var hero3 = new hero('Lady Axeman', 'Elfa', 'Arco e Flecha')
var hero4 = new hero('Hinata', 'Ninja', 'Jutsu')

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
