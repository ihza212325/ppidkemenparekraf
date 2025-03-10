// import {StyleSheet, Platform} from 'react-native';
// const IOS = Platform.OS === 'ios';
// const plusAndro = 0;
// const plusIOS = 2;

// const styleProps = {
//   colors: {
//     'cs-primary': '#174CA1',
//     'cs-royal': '#9E4882',
//     'cs-money': '#34D399',
//     'cs-green-tour': '#10B981',
//     'cs-black': '#212121',
//     'cs-white': 'white',
//     'cs-orange': '#f97316',
//     'cs-rose-500': '#F43F5E',
//     'cs-danger-background': '#FFDFDF',
//     'cs-danger-main': '#EF4444',
//     'cs-danger-text': '#CF2424',
//     'cs-slate-100': '#F2F7FC',
//     'cs-slate-300': '#E2E8F0',
//     'cs-slate-400': '#94a3b8',
//     'cs-slate-500': '#64748B',
//     'blue-300': '#DBEAFE',
//     'blue-500': '#BFDBFE',
//     'cs-moter': '#65B52D',
//     'soft-background': '#F6FBFE',
//     'rose-500': '#F43F5E',
//     transparent: 'rgba(0,0,0,0)',
//     'color-route-bg': 'rgba(8, 145, 178, 0.5)',
//     'color-route': '#0891B2',
//     'color-blue-twitter': '#1DA1F2',
//   },
//   fontFamily: {
//     primaryRegular: 'PTSans-Bold',
//     primarySemiBold: 'PlusJakartaSans-SemiBold',
//     primaryBold: 'PlusJakartaSans-Bold',
//   },
//   padding: {
//     basePadding: 16,
//   },
//   border: {
//     borderRadius: 13,
//     borderRadiusSecondary: 8,
//   },
// };
// const stylesText = StyleSheet.create({
//   textHeadline: {
//     // fontFamily: 'PlusJakartaSans-SemiBold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 24 + plusIOS : 24 + plusAndro,
//     // lineHeight: 31.1, // 1.75rem * 16
//   },
//   textHeadlineSecondary: {
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 20 + plusIOS : 20 + plusAndro,
//     // lineHeight: 31.1, // 1.75rem * 16
//   },
//   textTitle: {
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 18 + plusIOS : 18 + plusAndro,
//     // lineHeight: 24, // 1.5rem * 16
//   },
//   textTitleRegular: {
//     fontFamily: 'PTSans-Regular',
//     fontSize: IOS ? 16 + plusIOS : 16 + plusAndro,
//     // lineHeight: 24, // 1.5rem * 16
//   },

//   textTitleTime: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 18 + plusIOS : 18 + plusAndro,
//     // lineHeight: 24, // 1.5rem * 16
//   },

//   textTitleSecondary: {
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 22 + plusIOS : 22 + plusAndro,
//     // lineHeight: 24, // 1.5rem * 16
//     letterSpacing: -0.2,
//   },
//   textBodyRegular: {
//     fontFamily: 'PTSans-Regular',
//     fontSize: IOS ? 14 + plusIOS : 14 + plusAndro, // 0.875rem * 16
//     // lineHeight: 20, // 1.25rem * 16
//   },
//   textBodyBold: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 14 + plusIOS : 14 + plusAndro, // 0.875rem * 16
//     // lineHeight: 20, // 1.25rem * 16
//   },
//   textBodyBoldSecondary: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 12 + plusIOS : 14 + plusAndro, // 0.875rem * 16
//     // lineHeight: 20, // 1.25rem * 16
//   },
//   textButtonBase: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 16 + plusIOS : 16 + plusAndro, // 0.875rem * 16
//     // lineHeight: 20, // 1.25rem * 16
//   },

//   textButtonMini: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 13 + plusIOS : 13 + plusAndro, // 0.75rem * 16
//     // lineHeight: 16, // 1rem * 16
//   },
//   textCaption: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 13 + plusIOS : 13 + plusAndro, // 0.688rem * 16
//   },
//   textCaptionSecondary: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 13 : 13 + plusAndro, // 0.688rem * 16
//   },
//   textCaptionRegular: {
//     // fontFamily: 'PlusJakartaSans-Regular',
//     fontFamily: 'PTSans-Regular',
//     fontSize: IOS ? 12 + plusIOS - 2 : 12 + plusAndro + 1, // 0.688rem * 16
//   },
//   textCaptionRegularSecondary: {
//     // fontFamily: 'PlusJakartaSans-Regular',
//     fontFamily: 'PTSans-Regular',
//     fontSize: IOS ? 12 + plusIOS - 2 : 12 + plusAndro - 1, // 0.688rem * 16
//   },
//   textCaptionMini: {
//     // fontFamily: 'PlusJakartaSans-Bold',
//     fontFamily: 'PTSans-Bold',
//     fontSize: IOS ? 12 + plusIOS - 2 : 10 + plusAndro - 1, // 0.688rem * 16
//   },
//   textsecondary12Regular: {
//     // fontFamily: 'PlusJakartaSans-Regular',
//     fontFamily: 'PTSans-Regular',
//     fontSize: IOS ? 13 + plusIOS - 2 : 13 + plusAndro - 1, // 0.688rem * 16
//   },
// });

// export {styleProps, stylesText};
