import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://johnxanderblog.herokuapp.com/api/"
})