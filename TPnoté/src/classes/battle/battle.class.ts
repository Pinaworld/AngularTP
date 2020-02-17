import { Pokemon } from "../pokemon/pokemon.class";
import { Spell, category } from "../spell/spell.class";

export class Battle {
    constructor() {}
    
    public whoStart(A: Pokemon, B: Pokemon): Pokemon {
        if(A.speed > B.speed) {
            return A;
        } else if (B.speed > A.speed) {
            return B;
        } else {
            return (Math.floor(Math.random() * 2)) == 0 ? A : B;
        }
    }

    public calculateDamage(attacker: Pokemon, defender: Pokemon, spell: Spell) {
        let defense: number;
        if (spell.category === category.Special) {
           defense = defender.spDefense 
        } else {
            defense = defender.defense 
        }

        return Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * attacker.attack * spell.power / defense) / 50) + 2;
    }

    public dealDamage(defender: Pokemon, damage: number) {
        defender.hp -= damage;
    }

    public round() {

    }
}
