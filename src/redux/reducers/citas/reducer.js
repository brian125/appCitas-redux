import actionType from "./actionType";
import initialStates from "./initialStates";

const citasReducer = (state = initialStates, {type,payload}) => {
    switch(type){
        case actionType.CITAS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                citas: null,
                errorMessage: null
            };
        case actionType.CITAS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                citas: payload
            };
        case actionType.CITAS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        default: 
            return state;
    }
};

export default citasReducer;