import {PROFILE_ACTIONS} from '../enums/enums'

const defaultState = {
    name: 'Anna',
    secondName: 'r',
    email: 'anna',
    password: '12321'
};

export const profileReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case PROFILE_ACTIONS.LOAD:
            return {...state};
        default:
            return state
    }
};

// export const changeColorAction = (payload: number) => ({type: ACTIONS.CHANGE_COLOR, payload});
// export const deleteColorAction = (payload: number) => ({type: ACTIONS.DELETE_COLOR, payload});
// export const addColorAction = (payload: Icolor) => ({type: ACTIONS.ADD_COLOR, payload});
// export const changeCardColorAction = (payload: number) =>({type: ACTIONS.CHANGE_CARD_COLOR, payload})
