import {board} from "../mock/board";
import {BOARD_ACTIONS, COLORS} from '../enums/enums'
import {Icolor} from "../models/Icolor";


const defaultState = {
    board: board,
    activeColor: {
        name: 'rise after rise',
        color: COLORS.AQUA,
        isSelected: true,
        id: 3
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

const defaultColor = {
    name: '',
    color: COLORS.GRAY_DEFAULT,
    isSelected: false,
    id: -1
};

export const boardReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case BOARD_ACTIONS.CHANGE_COLOR: {
            const newColors = [...state.colors];
            newColors.map((item) => item.isSelected = false);
            let indexItem = state.colors.findIndex((e) => e.id === action.payload);

            if (indexItem > -1) {
                newColors[indexItem].isSelected = true;
            }


            return {...state, colors: newColors, activeColor: newColors[indexItem]};
        }
        case BOARD_ACTIONS.DELETE_COLOR: {
            let newColors = [...state.colors];
            let indexItem = state.colors.findIndex((item) => item.id === action.payload);
            let newBoard = [...state.board];
            let newActiveColor = state.activeColor;
            if(indexItem > -1 && newColors.length > 1) {
                /*порефакорить удаление через reduce ? */
                newColors.splice(indexItem, 1);
                if (action.payload === state.activeColor.id) {
                    newActiveColor = newColors[0];
                    /* читска доски */
                    newBoard.map((item) => { item.color = item.color.id === action.payload ? defaultColor : item.color});
                    newColors[0].isSelected = true;
                }
            }

            return {...state, colors: newColors, activeColor: newActiveColor, board: newBoard};
        }
        case BOARD_ACTIONS.ADD_COLOR: {
            return {...state, colors: state.colors.concat(action.payload)};
        }
        case BOARD_ACTIONS.CHANGE_CARD_COLOR: {
            const newBoard = [...state.board];
            let indexItem = state.board.findIndex((e) => e.id === action.payload);

            if (indexItem > -1) {
                newBoard[indexItem].color = newBoard[indexItem].color.id === state.activeColor.id ? defaultColor : state.activeColor;
            }
            return {...state, board: newBoard};
        }
        case BOARD_ACTIONS.LOAD:
            return {...state};
        default:
            return state
    }
};

export const changeColorAction = (payload: number) => ({type: BOARD_ACTIONS.CHANGE_COLOR, payload});
export const deleteColorAction = (payload: number) => ({type: BOARD_ACTIONS.DELETE_COLOR, payload});
export const addColorAction = (payload: Icolor) => ({type: BOARD_ACTIONS.ADD_COLOR, payload});
export const changeCardColorAction = (payload: number) =>({type: BOARD_ACTIONS.CHANGE_CARD_COLOR, payload})
