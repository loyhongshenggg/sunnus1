const secrets = {
  firebase: {
    apiKey: 'AIzaSyBhp7aFiCUk2CX2O8H16sQDXWlndnQj3WE',
    authDomain: 'sunnus-22.firebaseapp.com',
    projectId: 'sunnus-22',
    storageBucket: 'sunnus-22.appspot.com',
    messagingSenderId: '114067060360',
    appId: '1:114067060360:web:344b44892335ab139ad13d',
    measurementId: 'G-V0M4GPC2H7',
  },
  google: {
    apiKeys: [
      {
        name: 'Browser Key (auto created by Firebase)',
        key: 'AIzaSyBhp7aFiCUk2CX2O8H16sQDXWlndnQj3WE',
      },
    ],
    oauth2ClientIds: [
      {
        name: 'Web client (auto created by Google Service)',
        client_id:
          '114067060360-lraseje9t1dlbb5omjr6npaijnl98mem.apps.googleusercontent.com',
        project_id: 'sunnus-22',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        client_secret: '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',
        redirect_uris: ['https://sunnus-22.firebaseapp.com/__/auth/handler'],
        javascript_origins: [
          'http://localhost',
          'http://localhost:5000',
          'https://sunnus-22.firebaseapp.com',
        ],
      },
    ],
    serviceAccounts: [
      {
        name: 'firebase-adminsdk',
        email: 'firebase-adminsdk-z5ouq@sunnus-22.iam.gserviceaccount.com',
      },
    ],
  },
}

export default secrets