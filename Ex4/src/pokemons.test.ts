import { Battle } from "./Battle"
import { Pokemon } from "./Pokemon"

describe('Speed test', () => {
    test('Charmander is the fastest', () => {
        const charmander = new Pokemon('Charmander', 2, 200, 3, 4, 2, 7,4);
        const squirtle = new Pokemon('Squirtle', 2, 200, 3, 4, 2, 7,4);
        const round = new Battle(charmander, squirtle);
  
        expect(round.getFastestPokemon(charmander, squirtle)).toBe(charmander);
    });
  });
  