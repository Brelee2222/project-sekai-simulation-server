import { Touch } from "../utils/geometry/Touch";

export const minFlickVelocity = 0.5;

// TODO: finish
// Math.tan(touch.vpos.x/touch.vpos.y)

export function flickingCorrectDirection(touch: Touch, direction: number): boolean {
    return true;
}

export function flicking(touch: Touch): boolean {
    return touch.vpos.distance() > minFlickVelocity;
}
