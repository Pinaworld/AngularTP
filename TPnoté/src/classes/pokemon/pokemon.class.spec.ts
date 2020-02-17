import { Pokemon } from './pokemon.class';
import { Battle } from '../battle/battle.class';

describe('Speed test', () => {
    test('PIKACHU IS THE FASTEREST POKEMONSTER', () => {
        const pikachu = new Pokemon('PIKACHU', 2);
        const diglet = new Pokemon('DIGLET', 1);
        const battle : Battle = new Battle();

        expect(battle.whoStart(pikachu, diglet)).toBe(pikachu);
    });
});