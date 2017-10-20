/**
 * Created by ljunb on 16/7/3.
 */
import * as types from './actionTypes';
import Util from '../common/utils';

export let fetchFoodInfo = (foodCode)=> {

    let URL = `http://food.boohee.com/fb/v1/foods/${foodCode}/mode_show`;

    return dispatch => {
        dispatch(fetchFood());
        
        Util.get(URL, (response) => {
            dispatch(receiveFood(response));
        }, (error) => {alert(error)
            console.log(`Fetch food info error: ${error}`);
            dispatch(receiveFood({}))
        })
    }
}

let fetchFood = ()=> {
    return { type: types.FOOD_INFO_FETCH_FOOD }
}

let receiveFood = (food)=> {
    return {
        type: types.FOOD_INFO_RECEIVE_FOOD,
        food: food
    }
}

export let changeUnitsStatus = ()=> {
    return { type: types.FOOD_INFO_CHANGE_SHOW_UNITS_STATUS }
}