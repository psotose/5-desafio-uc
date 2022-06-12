//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones type fuego.
let pokemones = [
  {
    name: 'Pikachu',
    type: 'Electrico'
  },
  {
    name: 'Charmander',
    type: 'Fuego',
  },
  {
    name: 'Bulbasaur',
    type: 'Planta'
  },
  {
    name: 'Squirtle',
    type: 'Agua'
  },
  {
    name: 'Charmeleon',
    type: 'Fuego'
  },
  {
    name: 'Weedle',
    type: 'bicho'
  },
  {
    name: 'Charizard',
    type: 'Fuego'
  }
]

const firePokemons = pokemones.filter(pokemon => pokemon.type == 'Fuego');
console.log('firePokemons', firePokemons);