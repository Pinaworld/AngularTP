import { Pokemon } from './pokemon.class';
import { Battle } from '../battle/battle.class';

describe('Test', () => {
    test('Pikachu is so damn fast nigg', () => {
        const rattata = new Pokemon('rattata', 2);
        const diglet = new Pokemon('diglet', 1);
        const battle : Battle = new Battle();

        expect(battle.whoStart(rattata, diglet)).toBe(rattata);
    });
});