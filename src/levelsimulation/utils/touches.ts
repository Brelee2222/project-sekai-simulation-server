import { Touch } from "./geometry/Touch";

export let touches: Touch[];

export function tap(touch : Touch) {
    touches.push(touch);
}

export function untap(touch : Touch) {
    touches.splice(touches.indexOf(touch), 1);
}