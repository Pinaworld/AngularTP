export enum category {
    Physic,
    Special
}

export enum type {
    normal,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    dark,
    steal,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    fairy
}

export class Spell {
    name: string;
    power: number;
    category: category;
    // type: type;
    priority: number;
    constructor(name: string, power: number, category: category, /*type: type,*/ priority: number) {
        this.name = name;
        this.power = power;
        this.category = category;
        // this.type = type;
        this.priority = priority;
    }

}
