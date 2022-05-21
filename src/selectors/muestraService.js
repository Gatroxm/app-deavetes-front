import axios from "axios";

export const getMuestras = async() => {
    const url = `http://localhost:8080/api/muestras`;
    const response = await axios.get(url);
    return response.data;
}

export const getMuestraById = async(id) => {
    const url = `http://localhost:8080/api/muestras/${id}`;
    const response = await axios.get(url);
    return response.data;
}
export const postMuestra = (muestra) => {
    const url = `http://localhost:8080/api/muestras`;
    const response = axios.post(url, muestra);
    return response;
}

export const putMuestra = async(muestra) => {
    const url = `http://localhost:8080/api/muestras/${muestra._id}`;
    const response = await axios.put(url, muestra);
    return response;
}

export const deleteMuestra = async(id) => {
    const url = `http://localhost:8080/api/muestras/${id}`;
    const response = await axios.delete(url);
    return response;
}