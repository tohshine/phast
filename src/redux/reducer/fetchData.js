import { FETCH_DATA } from '../action/type'

const initialState = []

export const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:

            return action.payload

        default:
            return state;
    }






}