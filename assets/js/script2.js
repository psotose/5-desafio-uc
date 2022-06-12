// 2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemons = ['Pikachu','Charmander','Bulbasaur','Squirtle']

const upperCasePokemons = pokemons.map(pokemon => pokemon.toUpperCase());
console.log('upperCasePokemons', upperCasePokemons);