import { AxiosError, AxiosResponse } from "axios";
import instance from "../config/axios";
import { useCallback, useEffect, useState } from "react";
// import Toast from 'react-native-toast-message';
// import {Dimensions, View} from 'react-native';
// import LottieView from 'lottie-react-native';
// import {userStore} from '../store/user';
// import VersionCheck from 'react-native-version-check';
// import moment from 'moment';
// import ModalComponent from '../components/Atoms/Modal/ModalComponent';
// import AsyncStorage, {
//   useAsyncStorage,
// } from '@react-native-async-storage/async-storage';
// import hookNavigation from '../config/hookNavigation';
// import {useNavigation} from '@react-navigation/native';
// import LoadingComponent from '../components/Atoms/LoadingComponent/LoadingComponent';
// import {themeStore} from '../store/theme';
// import {stylePropsDark} from '../config/stylePropsDark';
// import {styleProps} from '../config/styleProps';
// import Loader from '../components/Atoms/Loader/Loader';
// import {useTranslation} from 'react-i18next';
// import React from 'react';

// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const subscribeTokenRefresh = (callback: (token: string) => void) => {
//   refreshSubscribers.push(callback);
// };

// const onRefreshed = (token: string) => {
//   refreshSubscribers.forEach(callback => callback(token));
//   refreshSubscribers = [];
// };

// const refreshToken = async (user: any, setUser: (user: any) => void) => {
//   isRefreshing = true;
//   // console.log(user, 'in dari koe');

//   try {
//     // const response = await axios.post(
//     //   'https://tijeapi.transjakarta.co.id/stg/auth/token/refresh',
//     const response = await axios.post(
//       'https://tijeapi.transjakarta.co.id/v1/auth/token/refresh',
//       {
//         refresh_token: user?.tokenReferesh,
//       },
//     );
//     const {token, token_valid_until, token_refresh} = response.data;
//     if (token) {
//       // console.log(
//       //   moment.unix(token_valid_until).format('DD MMMM YYYY, HH:MM:ss'),
//       //   'unix newwww',
//       // );

//       setUser({
//         ...user,
//         token,
//         token_valid_until,
//         tokenReferesh: token_refresh,
//       });
//       onRefreshed(token);
//       return token;
//     }
//   } catch (error) {
//     console.log('Error refreshing token:', error);
//   } finally {
//     isRefreshing = false;
//   }
// };

function useApi({
  service = {},
  messageSucces = false,
  messageError = false,
  disableErrorMessage,
  onSuccess = () => {},
  onError = () => {},
  navigation = false,
}: {
  service: any;
  messageSucces?: boolean;
  messageError?: boolean;
  disableErrorMessage?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  navigation?: any;
}) {
  //   const {isDarkMode} = themeStore();
  const { url, method, params, payload, header } = service;
  const [isLoading, setisLoading] = useState(false);
  //   const {user, setUser, device, setTokenPayment, fcmToken} = userStore();
  //   const {removeItem} = useAsyncStorage('users');
  //   const {t} = useTranslation();
  //   const {i18n} = useTranslation();
  // let cancelToken: CancelTokenSource | null = null; // Tambahkan cancelToken
  //   const cancelTokenRef = useRef<CancelTokenSource | null>(null); // Gunakan useRef untuk cancelToken

  // const navigation = useNavigation();

  //   const makeRequest = async (config: any) => {
  //     try {
  //       const { data } = await instance<AxiosResponse>(config);
  //       return data;
  //     } catch (e) {
  //       throw e;
  //     }
  //   };

  //   const abortRequest = () => {
  //     if (cancelTokenRef.current) {
  //       cancelTokenRef.current.cancel("Request dibatalkan secara manual");
  //       cancelTokenRef.current = null; // Reset cancelToken setelah dibatalkan
  //       console.log("j;ana abord");
  //     }
  //   };
  const controller = new AbortController();

  const abortRequest = () => {
    // console.log("aborttt jalannn");
    controller.abort();
  };
  useEffect(() => {
    return () => {
      abortRequest();
    };
  }, []);

  const onStart = async ({
    altenativePayload = false,
    altenativeparams = false,
    altenativeMessageSucces = false,
  }: {
    altenativePayload?: any;
    altenativeparams?: any;
    altenativeMessageSucces?: any;
  }) => {
    try {
      //   const appVersion = VersionCheck.getCurrentVersion();

      setisLoading(true);

      const headerObj = {
        ...header,
        // 'X-App-Version': appVersion,
        // 'X-Device-ID': device,
        // 'X-Lang': i18n.language,
        // 'X-FCM-Token': fcmToken,
      };
      //   if (cancelTokenRef.current) {
      //     cancelTokenRef.current.cancel(
      //       "Request dibatalkan karena screen berpindah"
      //     );
      //   }
      //   cancelTokenRef.current = axios.CancelToken.source();

      const config = {
        method: method.toLowerCase() || "get",
        url: url,
        params: altenativeparams ? altenativeparams : params || {},
        data: altenativePayload ? altenativePayload : payload || {},
        headers: headerObj,
        // cancelToken: cancelTokenRef.token, // Tambahkan cancelToken di config
      };
      // console.log(config);

      //   const unixTimeNowMinusOneDay = moment().unix();
      // console.log(
      //   moment.unix(unixTimeNowMinusOneDay).format('DD MMMM YYYY, HH:mm:ss'),
      //   'unix',
      // );
      // console.log(
      //   moment.unix(user?.token_valid_until).format('DD MMMM YYYY, HH:mm:ss'),
      //   'unix token',
      // );

      //   if (user?.token_valid_until < unixTimeNowMinusOneDay) {
      //     if (isRefreshing) {
      //       await new Promise<string>(resolve => subscribeTokenRefresh(resolve));
      //     } else {
      //       await refreshToken(user, setUser);
      //     }
      //     config.headers.Authorization = `Bearer ${user.token}`;
      //   } else {
      //     config.headers.Authorization = user ? `Bearer ${user.token}` : '';
      //   }
      //   console.log(controller, "lpontong");

      const { data } = await instance<AxiosResponse>({
        ...config,
        signal: controller.signal,
      });
      //   return data;
      //   const data = await makeRequest(config);
      onSuccess(data);

      if (messageSucces || (altenativeMessageSucces && method !== "get")) {
        // Toast.show({
        //   type: 'success2',
        //   position: 'top',
        //   text1: `${messageSucces || altenativeMessageSucces}`,
        // });
      }
      setisLoading(false);
      return data;
    } catch (e) {
      setisLoading(false);
      const error = e as AxiosError;
      const responseError: any = error?.response?.data;

      onError(error);
      if (disableErrorMessage) {
        return;
      }

      setisLoading(false);
      if (
        error?.response?.status === 400 &&
        responseError?.message === "Invalid refresh token"
      ) {
        if (navigation) {
          //   await removeItem();
          //   setUser(null);
          //   setTokenPayment(null);
          // console.log(navigation, 'ini');
          //   navigation.reset({
          //     index: 0,
          //     routes: [{name: 'LoginScreen'}],
          //   });
        }
      }

      // untuk eror pengumanan
      if (error?.response?.status === 469) {
        // Toast.show({
        //   type: 'errorBlue',
        //   position: 'top',
        //   text1: t(JSON.stringify(responseError.message)),
        // });
      }
      // console.log(JSON.stringify(responseError.message), 'erorox');
      if (
        (error?.response?.status === 401 &&
          responseError?.message &&
          responseError?.message.toLocaleLowerCase() ===
            "invalid token claims") ||
        (error?.response?.status === 400 &&
          responseError?.message &&
          responseError?.message.toLocaleLowerCase() === "bad request")
      ) {
      } else {
        // console.log('masuk');

        if (error?.message) {
          // console.log('eror 1');

          if (messageError) {
            // Toast.show({
            //   type: 'error',
            //   position: 'top',
            //   text1: t(`${messageError}`),
            // });
          } else {
            if (responseError?.message) {
              //   Toast.show({
              //     type: 'error',
              //     position: 'top',
              //     text1: t(`${responseError.message}`),
              //   });
            }
          }
        } else {
          //   console.log("erlr2");

          if (messageError) {
            // Toast.show({
            //   type: 'error',
            //   position: 'top',
            //   text1: t(`${messageError}`),
            // });
          } else {
            // Toast.show({
            //   type: 'error',
            //   position: 'top',
            //   text1: `Error Code: ${error?.response?.status}`,
            // });
          }
        }
      }
      return error?.response?.status;
    } finally {
      setisLoading(false);
    }
  };
  //   useEffect(() => {
  //     return () => {
  //       if (cancelTokenRef.current) {
  //         cancelTokenRef.current.cancel(
  //           "Request dibatalkan karena screen berpindah"
  //         );
  //         cancelTokenRef.current = null;
  //       }
  //     };
  //   }, []);
  const LoadingComponent = useCallback(() => {
    return (
      <>
        {isLoading && (
          <p>loading...</p>
          //   <View
          //     style={{
          //       position: 'absolute',
          //       width: Dimensions.get('window').width,
          //       height: Dimensions.get('window').height + 100,
          //       zIndex: 100,
          //       backgroundColor: isDarkMode
          //         ? stylePropsDark.colors['cs-white']
          //         : styleProps.colors['cs-white'],
          //     }}>
          //     <View
          //       style={{
          //         backgroundColor: isDarkMode
          //           ? stylePropsDark.colors['cs-white']
          //           : styleProps.colors['cs-white'],
          //         height: Dimensions.get('window').height + 100,
          //         justifyContent: 'center',
          //         alignItems: 'center',
          //         zIndex: 10,
          //       }}>
          //       <Loader />
          //     </View>
          //   </View>
        )}
      </>
    );
  }, [isLoading]);

  return { onStart, isLoading, LoadingComponent, abortRequest };
}

export default useApi;
