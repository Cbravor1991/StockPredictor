import axios, { AxiosRequestConfig } from "axios";
import { SnackbarUtilities, getValidationError } from "@/utilities";

export const AxiosInterceptor = () => {
    const updateHeader = (request: AxiosRequestConfig) => {
        const token = "1234";
        const newHeader = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        request.headers = newHeader;
        return request;
    };


    axios.defaults.baseURL = "http://localhost:8000";

    axios.interceptors.request.use((request: any) => {
        if (request.url?.includes("assets")) return request;
        return updateHeader(request);
    });

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            SnackbarUtilities.error(getValidationError(error.code));
            return Promise.reject(error);
        }
    );
};
