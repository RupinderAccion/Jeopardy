import { SET_CATEGORIES, PICK_CATEGORY } from "../actions"
import { combineReducers } from "redux";


const categories = (state = [], action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

const category = (state= {}, action) => {
    switch(action.type) {
        case PICK_CATEGORY:
            return action.category;
        default:
            return state;
    }
}
export default combineReducers({categories, category});