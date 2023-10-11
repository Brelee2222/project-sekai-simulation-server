import { Touch } from "./geometry/Touch";

export let touches: Touch[];

export function tap(touch : Touch) {
    touches.push(touch);
}

export function updateTouches() {
    touches = touches.filter(touches => touches.pressing);
}