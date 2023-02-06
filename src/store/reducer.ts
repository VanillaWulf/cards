import {board} from "../mock/board";
import {ACTIONS, COLORS} from '../enums/enums'
import {Icolor} from "../models/Icolor";


const defaultState = {
    board: board,
    activeColor:   {
        name: 'open',
        color: COLORS.RED,
        isSelected: true,
        id: 1
    },
    colors: [
        {
            name: 'rise after check',
            color: COLORS.RED,
            isSelected: false,
            id: 1
        },
        {
            name: 'pass after rise',
            color: COLORS.GREEN,
            isSelected: false,
            id: 2
        },
        {
            name: 'rise after rise',
            color: COLORS.AQUA,
            isSelected: true,
            id: 3
        },
        {
            name: 'pass after rerise',
            color: COLORS.BLUE,
            isSelected: false,
            id: 4
        }
    ]
};

export const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.CHANGE_COLOR: {
            const newColors = [...state.colors];
            newColors.map((item) => item.isSelected = false);
            let indexItem = state.colors.findIndex((e) => e.id === action.payload);

            if (indexItem > -1) {
                newColors[indexItem].isSelected = true;
            }


            return {...state, colors: newColors, activeColor: newColors[indexItem]};
        }
        case ACTIONS.DELETE_COLOR: {
            const newColors = [...state.colors];
            const indexItem = state.colors.findIndex((item) => item.id === action.payload);
            let newActiveColor = state.activeColor;
            if(indexItem > -1) {
                /*порефакорить удаление через reduce ? */
                newColors.splice(indexItem, 1);
                if (indexItem === state.activeColor.id) {
                    console.log(newColors);
                    newActiveColor = state.colors[0];
                    /* обработу isSelected  - переключение на первый + чистку доски*/
                    newColors[0].isSelected = true;
                }
            }

            return {...state, colors: newColors, activeColor: newActiveColor};
        }
        case ACTIONS.ADD_COLOR: {
            return {...state, colors: state.colors.concat(action.payload)};
        }
        case ACTIONS.CHANGE_CARD_COLOR: {
            const newBoard = [...state.board];
            let indexItem = state.board.findIndex((e) => e.id === action.payload);

            const defaultColor = {
                    name: '',
                    color: COLORS.GRAY_DEFAULT,
                    isSelected: false,
                    id: -1
            };

            if (indexItem > -1) {
                newBoard[indexItem].color = newBoard[indexItem].color.id === state.activeColor.id ? defaultColor : state.activeColor;
            }
            return {...state, board: newBoard};
        }
        case ACTIONS.LOAD:
            return {...state};
        default:
            return state
    }
};

export const changeColorAction = (payload: number) => ({type: ACTIONS.CHANGE_COLOR, payload});
export const deleteColorAction = (payload: number) => ({type: ACTIONS.DELETE_COLOR, payload});
export const addColorAction = (payload: Icolor) => ({type: ACTIONS.ADD_COLOR, payload});
export const changeCardColorAction = (payload: number) =>({type: ACTIONS.CHANGE_CARD_COLOR, payload})
