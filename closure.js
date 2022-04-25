class Pokemon {
  constructor(name, type, evolutions){
    this.name = name;
    this.type = type;
    this.evolutions = evolutions;
    this.phases = evolutions.length;
    this.current_phase = 0;
  }

  evolve() {
    return () => {
      if (this.current_phase >= this.phases) {
        this.current_phase = 0;        
      }
      console.log(this.evolutions[this.current_phase++]);
    }

  }

}

const pokemon_1 = new Pokemon('Charmander', 'Fire', ['Charmander', 'Charmeleon', 'Charizard']);
const pokemon_1_evolution = pokemon_1.evolve();
pokemon_1_evolution();

const pokemon_2 = new Pokemon('Squirtle', 'Water', ['Squirtle', 'Wartortle', 'Blastoise'])
const pokemon_2_evolution = pokemon_2.evolve();
pokemon_2_evolution();
pokemon_1_evolution();
pokemon_1_evolution();
pokemon_1_evolution();
pokemon_2_evolution();