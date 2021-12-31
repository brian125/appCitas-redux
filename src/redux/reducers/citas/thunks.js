import citasService from "../../../services/citasService";
import actions from "./actions";

export const loadCitasAsync = () => (dispatch) => {
    dispatch(actions.citasLoadStart());
    citasService.getAllCitas()
        .then((response) => dispatch(actions.citasLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.citasLoadError(error.message)));
};