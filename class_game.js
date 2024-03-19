// Criei uma class chamada "hero" na qual tem um constructor que tem os seguintes parametros : "name, type, weapon".
class hero {
  constructor(name, type, weapon) {
    this.name = name
    this.type = type
    this.weapon = weapon
  }

  // Já aqui defini um metodo na class, chamada "atacar" para imprimir os dados do heroi
  atacar() {
    console.log(
      `O heroi chamado ${this.name}, do tipo ${this.type}, atacou os inimigos com uma ${this.weapon}!`
    )
  }
}

//E para utilizar os métodos da class hero, crei uma instância chamada "new hero"
var hero1 = new hero('Dead Sage', 'Guerreiro', 'Espada')
var hero2 = new hero('Merlin', 'Mago', 'Magia')
var hero3 = new hero('Lady Axeman', 'Elfa', 'Arco e Flecha')
var hero4 = new hero('Hinata', 'Ninja', 'Jutsu')

//Já nessa parte final chamei o metodo "atacar()" com todos os dados dos herois que defini na instancia
hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
