import axios from "axios";

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: "https://clinica-reactiva.herokuapp.com", 
        responseType: "json"
    })

    return axiosInstance;
}

export default apiClient;