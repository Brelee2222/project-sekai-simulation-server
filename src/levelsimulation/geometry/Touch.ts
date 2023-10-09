import { Vector2 } from "./Vector2";

export interface Touch {
    radius : number;

    pos : Vector2;

    vpos : Vector2;

    pressed : boolean;

    touchTime : number;

    lastTouchTime : number;
}