import { LevelDataEntity } from "sonolus-core";
import { getEntityDataName } from "../noteMeta";

export function createArchetype<L extends LevelArchetype>(Archetype : L, entityData : LevelDataEntity, index : number) : L {
    return new (Archetype as any)(entityData, index) as L;
}

export class LevelArchetype {
    entityData : LevelDataEntity;
    index : number;

    constructor(levelDataEntity : LevelDataEntity, index : number) {
        this.entityData = levelDataEntity;
        this.index = index;
    }

    defineData<L extends { [ n : string ] : { name : string, type : "value" | "ref"} }, K extends { [ n in keyof L ] : L[n]["type"] extends "value" ? number : string }>(types : L) : K {
        const definitions : { [index : string] : number | string } = {};

        Object.keys(types).forEach(key => {
            const dataNode = getEntityDataName(this.entityData, types[key].name);
            if(dataNode == undefined) return;
            definitions[key] = types[key].type == "value" ? (dataNode as { value : number }).value : (dataNode as { ref : string }).ref;
        });

        return definitions as K;
    }
}