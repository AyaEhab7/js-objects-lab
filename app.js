const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],

    difficulty: "Med",


  }
//Exercise 1:
console.dir(pokemon, { maxArrayLength: null });

//Exercise 2:

console.log(game);

//Exercise 3:

console.log('Exercise 3 Result:',game.difficulty);

//Exercise 4:

const starterPokemon = pokemon.filter(p => p.starter);
game.party.push(starterPokemon);
console.log('Exercise 4 Result:',game.party);

//Exercise 5:

const waterPokemon = pokemon.filter(p => 
  p.type === "fire" && p.hp > 73); // e.g., Blastois

game.party.push(...waterPokemon);
console.log('Exercise 5 Result:',game.party);

//Exercise 6:

game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
      gym.completed = true; 
    }
  });
  
console.log('Exercise 6 Result:',game.gyms);

// Exercise 7:

const updateP1 = game.party.splice(0,0,pokemon[1]);
const updateP2 = game.party.splice(1,1,pokemon[4]);
const updateP3 = game.party.splice(2,1,pokemon[7]);
const updateP4 = game.party.splice(3,1,pokemon[25]);

console.log('Exercise 7 Result:',game.party);


// Exercise 8:
game.party.forEach(n => {
  console.log('Exercise 8 Result:',n.name); 
});

// Exercise 9:
const starterPokemons = pokemon.filter(p => p.starter); 
starterPokemons.forEach(p => {
  console.log('Exercise 9 Result:',p.name); 
});


// Exercise 10:
///*catchPokemon: [Function (anonymous)]

const catchPokemon = pokemon.filter(pokemon => pokemon.type ==='grass' && pokemon.hp >90);
    game.catchPokemon = function(pokemonObje) {
        this.party.push(pokemonObje);
 };
      const pokemonToCatch = pokemon[0];
      game.catchPokemon(pokemonToCatch);
      console.log('Exercise 10 result:',game);

// Exercise 11:
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj); 
  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) {
    pokeball.quantity--; 
  }
};

game.catchPokemon(pokemon[0]); 
console.log('Exercise 11 result:',game.items); 

// Exercise 12:
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = false; 
  }
});

console.log('Exercise 12 Result:',game.gyms);

// Exercise 13:
//gymStatus: [Function (anonymous)],

game.gymStatus = function(){
    const gymTally = {completed: 0, incomplete: 0};
game.gyms.forEach(gym => {
    if (gym.completed) {
       gymTally.completed++;
 } else {
       gymTally.incomplete++;
        }
    });
    console.log('Exercise 13 result:',gymTally);
};
game.gymStatus();

// Exercise 14:

game.partyCount = function() {
  return this.party.length; 
};
console.log('Exercise 14 result:',game.partyCount()); 

// Exercise 15:
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true; 
  }
});
console.log('Exercise 15 Result:',game.gyms);

// Exercise 16:
console.log('Exercise 15 Result:',game); 









