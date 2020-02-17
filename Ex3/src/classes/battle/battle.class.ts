import { Pokemon } from "../pokemon/pokemon.class";

export class Battle {
    constructor() {}
    
    public whoStart(A: Pokemon, B: Pokemon): Pokemon {
        if(A.speed > B.speed) {
            return A;
        } else if (B.speed > A.speed) {
            return B;
        } else {
            return A;
        }
    }

}
