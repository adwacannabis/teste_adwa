import {
    ON_REQUEST,
    OFF_REQUEST,
} from "../actions/types";

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_REQUEST:
            return { ...state, loading: true };
        case OFF_REQUEST:
            return { ...state, loading: false };
        default:
            return state;
    }
};