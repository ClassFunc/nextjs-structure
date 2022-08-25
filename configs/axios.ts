import axios from "axios";
import {localToken} from "../common/token";


const axiosConfigs = () => {
    //REQUEST
    axios.interceptors.request.use(
        (config: any) => {
            const {token} = localToken();
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            if (error && error.request) {
            }
            return Promise.reject(error);
        });

    //RESPONSE
    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            const originalRequest = error.config;
            if (!error.response) {
                return Promise.reject(error)
            }
            const {status, data: {error_code, error_message}} = error.response
            if (
                (status === 400 && error_code === 'NotAuthorizedException')
                || (status === 401 && error.response.data.error === 'login required')
            ) {
                if (
                    error_message === 'Invalid Refresh Token'
                    || error_message === 'Refresh Token has been revoked'
                    || error_message === 'Refresh Token has expired'
                ) {
                    // remove some cookies if you need
                    // removeCookie("[your cookies]")
                    return Promise.reject(error)
                }

                // Refresh you token if you need
                // const data = await refreshToken()
                // if (data) {
                //     originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                //     return axios(originalRequest)
                // } else {
                //     return Promise.reject(error)
                // }

            }
            return Promise.reject(error);
        }
    );
}

export default axiosConfigs;