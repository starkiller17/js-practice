class Pokemon {
  constructor(name, type, evolutions){
    this.name = name;
    this.type = type;
    this.evolutions = evolutions;
    this.phases = evolutions.length;
  }

  evolve() {
    let phase = 0;

    return () => {
      if (phase >= this.phases) {
        phase = 0;        
      }
      console.log(this.evolutions[phase++]);
    }

  }

}

const pokemon_1 = new Pokemon('Charmander', 'Fire', ['Charmander', 'Charmeleon', 'Charizard']);
const evolution = pokemon_1.evolve();
evolution();
evolution();
evolution();
evolution();