import {actionTypes} from '../actions'

export default (state = [], action)=>{
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.paylaod]
            
        default:
            return state;
    }
}