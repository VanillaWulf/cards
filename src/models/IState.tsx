import {Icard} from "./Icard";
import {Icolor} from "./Icolor";

export interface IState {
    board: Icard[],
    colors: Icolor[],
    activeColor: Icolor
}
