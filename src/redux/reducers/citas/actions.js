import actionType from "./actionType";

const citasLoadStart = () => ({
    type: actionType.CITAS_LOAD_START
}); 

const citasLoadSuccess = (citas) => ({
    type: actionType.CITAS_LOAD_SUCCESS,
    payload: citas
});

const citasLoadError = (errorMessage) => ({
    type: actionType.CITAS_LOAD_ERROR,
    payload: errorMessage
});

export default {
    citasLoadStart,
    citasLoadSuccess,
    citasLoadError
};