import {Icard} from "./Icard";
import {Icolor} from "./Icolor";

export interface Istate {
    board: Icard[],
    colors: Icolor[],
    activeColor: any
}
