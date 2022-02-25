// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBuRBa1rmrTaiQA6hQgmNqV6XVav3McqbU',
    authDomain: 'pubmarkstore.firebaseapp.com',
    projectId: 'pubmarkstore',
    storageBucket: 'pubmarkstore.appspot.com',
    messagingSenderId: '90098310631',
    appId: '1:90098310631:web:a0a1d3efeb0b6187a93142',
    measurementId: 'G-N3DYMEP937',
  },

  apis: {
    retries: 5,
    usersSerice: 'http://localhost:3000',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
