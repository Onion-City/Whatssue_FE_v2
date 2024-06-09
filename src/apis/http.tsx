import axios from "axios";

import { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
});

export interface HttpClient extends AxiosInstance {
    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = unknown>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = unknown>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = unknown>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    delete<T = unknown>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
  
  export const http: HttpClient = axiosInstance;

// TODO: token 빼기
// axiosInstance.interceptors.request.use(
//     async (config) => {
//         const loginStateValue = localStorage.getItem('accessToken');
//         // console.log('commonApi: ', loginStateValue);
//         if (loginStateValue) {
//             config.headers['Authorization'] = `Bearer ${loginStateValue}`;
//         } 
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

axiosInstance.interceptors.response.use(
    (res) => { return res },
    (err) => {
        const {
            config,
            response,
        } = err;
        console.log(err);
        // access token 만료 시
        if (response?.status && response?.status === 403) {
            window.location.href = "/login";
            localStorage.clear();
            return config;
        }
        return Promise.reject(err);
    }
)

export default axiosInstance;
