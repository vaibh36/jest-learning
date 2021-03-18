import { findRenderedComponentWithType } from "react-dom/test-utils";
import {actionTypes} from '../actions';
import successReducer from './successReducer';

test('returns default initial state', ()=>{
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false)
})

test('returns state of true', ()=>{
    const newState = successReducer(undefined, {type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true)
})