import {board} from "../mock/board";
import {ACTIONS, COLORS} from '../enums/enums'


const defaultState =  {
    board: board,
    activeColor: 'green',
    colors: [
        {
            name: 'open',
            color: COLORS.RED,
            isSelected: true,
            id: 1
        },
        {
            name: 'closed',
            color: COLORS.GREEN,
            isSelected: false,
            id: 2
        }
    ]
};

export const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.CHANGE_COLOR:
        {
            const newColors = [...state.colors];
            let newActiveColor = '';
            newColors.map((item) => item.isSelected = false);
            let indexItem = state.colors.findIndex((e) => e.id === action.payload);

            if(indexItem > -1) {
                newColors[indexItem].isSelected = true;
                newActiveColor = newColors[indexItem].color
            }


            return {...state, colors: newColors, activeColor: newActiveColor};
        }
        case ACTIONS.DELETE_COLOR:
        {
            const newColors = [...state.colors];
            console.log(action.payload);
            let newActiveColor = '';
            const deleteItem = newColors.findIndex((item) => item.id = action.payload);
            console.log(deleteItem);
            /*добавить логику смены цвета*/
            newColors.splice(1, 1);
            console.log(newColors);
            // let indexItem = state.colors.findIndex((e) => e.id === action.payload);
            //
            // if(indexItem > -1) {
            //     newColors[indexItem].isSelected = true;
            //     newActiveColor = newColors[indexItem].color
            // }


            return {...state, colors: newColors, activeColor: '#fff'};
        }
        case ACTIONS.ADD_COLOR:
        {
            return {...state, colors: state.colors.concat(action.payload) };
        }
        case ACTIONS.CHANGE_CARD_COLOR:
        {
            const newBoard = [...state.board];
            let indexItem = state.board.findIndex((e) => e.id === action.payload);

            if(indexItem > -1) {
                newBoard[indexItem].color = newBoard[indexItem].color === state.activeColor ? '#EEFFEE' : state.activeColor;
            }
            return {...state, board: newBoard };
        }
        case ACTIONS.LOAD:
            return {...state};
        default:
            return state
    }
};
