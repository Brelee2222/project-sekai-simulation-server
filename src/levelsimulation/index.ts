import { LevelData, LevelDataEntity } from "sonolus-core";
import { Note } from "./notes/Note";
import { loadBeats } from "./utils/beat";
import { updateTouches } from "./utils/touches";
import { noteTypes } from "./notes";
import { createArchetype } from "./utils/LevelArchetype";

let notes : Note[];

export let time: number;

export function loadLevel(levelData : LevelData) {
    const levelEntities : LevelDataEntity[] = levelData.entities;

    time = 0;

    loadBeats(levelEntities);

    notes = levelEntities
    .filter(entity => noteTypes[entity.archetype] !== undefined)
    .map(note => 
        createArchetype<Note>(noteTypes[note.archetype] as any, note, levelEntities.indexOf(note))
    );
    
    notes.forEach(note => note.init());
}

export function replayLevel() : void {
    notes.forEach(note => note.replay());
}

export function step(seconds : number) {
    time += seconds;

    notes.forEach(note => note.touch());

    updateTouches();

    notes.forEach(note => note.update());
}

export function auto() : void {
    notes.forEach(note => {
        note.tap = note.noteTime;
    });
}