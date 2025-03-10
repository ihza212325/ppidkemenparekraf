// axiosConfig.js
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
//   import {Platform} from 'react-native';
// import userStore from '../assets/store/userStore';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
// import {userStore} from '../store/user';
// import {MODE} from '@env';

const instanceAxios: AxiosInstance = axios.create({
  baseURL: "https://tijeapi.transjakarta.co.id/v1",
  // baseURL: 'https://tijeapi.transjakarta.co.id/stg',
  timeout: 20000,
  headers: {
    //   'X-App-OS': Platform.OS,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   withCredentials: true,
});

// Interceptor untuk menambahkan token otorisasi ke setiap permintaan
instanceAxios.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<any> => {
    console.log(config, "lontongggggggsx");

    //   const api = await AsyncStorage.getItem('api');

    //   // console.log(api, 'ini api');
    //   if (api) {
    //     if (api === 'prod') {
    //       config.baseURL = 'https://tijeapi.transjakarta.co.id/v1';
    //     } else {
    //       config.baseURL = 'https://tijeapi.transjakarta.co.id/stg';
    //     }
    //   }

    //   if (config.method == 'get') {
    //     delete config.data;
    //   }
    return config;
    // },
  }
);

// Interceptor untuk melakukan manipulasi data setelah respons diterima
instanceAxios.interceptors.response.use(
  (response) => {
    // console.log(response.headers['set-cookie'], 'ini res header');
    // console.log(response.headers['X-Session-ID'], 'ini res id header');
    // Manipulasi data di sini jika diperlukan
    return response;
  },
  (error) => {
    console.log(error, "eror");
    // console.log(error?.response, 'eror axios');
    // navigateToLogin(error.config.navigation);
    // allHandleError(error);
    return Promise.reject(error);
  }
);

export default instanceAxios;
