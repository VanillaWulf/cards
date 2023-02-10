import {Icard} from "./Icard";
import {Icolor} from "./Icolor";

export interface Iboard {
    board: Icard[],
    colors: Icolor[],
    activeColor: Icolor
}
