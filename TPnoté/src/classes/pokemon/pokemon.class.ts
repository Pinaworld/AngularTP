import { Spell } from "../spell/spell.class";

export class Pokemon {
    name: string;
    level: number;
    hp: number;
    speed: number;
    attack: number;
    spAttack: number;
    defense: number;
    spDefense: number;

    constructor(name: string, level: number, hp: number, speed: number,
        attack: number, spAttack: number, defense: number, spDefense: number) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.spAttack = spAttack;
        this.defense = defense;
        this.spDefense = spDefense;
    }

    public levelUp() {
        this.level++;
    }

}
