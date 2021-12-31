import apiClient from "../helper/apiClient";

class CitasService {
  getAllCitas() {
    return apiClient().get("/citas");
  }
}

export default new CitasService();
