import axios from "axios";

export const TestingService = () => {
    return axios.get("https://rickandmortyapi.com/api/character/2")
}