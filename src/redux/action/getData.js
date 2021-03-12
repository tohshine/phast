import axios from 'axios'
import { FETCH_DATA } from './type'


export const getData = () =>async dispatch => {
    try {
        const { data } = await axios.get('https://cat-fact.herokuapp.com/facts')
        dispatch({
            type: FETCH_DATA,
            payload: data
        })
      
    } catch (error) {
        console.log(error.response.data);
    }

}