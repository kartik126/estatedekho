// export class LocalStorageYep {
//   authorized: boolean;
//   authToken: string;
//   constructor(key: any = 'loginUser') {
//     this.authToken =
//       typeof localStorage !== 'undefined'
//         ? localStorage.getItem(key) || ''
//         : '';
//     this.authorized = this.authToken !== '';
//   }

//   getLocalStorage(key: any = 'loginUser') {
//     return typeof localStorage !== 'undefined'
//       ? localStorage.getItem(key) || ''
//       : '';
//   }

//   setLocalStorage(key: string, value: any) {
//     if (typeof localStorage !== 'undefined') {
//       localStorage.setItem(key, value);
//     }
//   }
// }
