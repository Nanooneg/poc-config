export const baseUrl = {
  gateway : 'http://localhost:9001'
};

export const serviceUrls = {
  test: {
    baseUrl : baseUrl.gateway + '/TEST'
  }
};


// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://www.auth.arnaudlaval-developer.com/auth/realms/zone-java',

    // URL of the SPA to redirect the user to after login
    // redirectUri: 'http://localhost:4200/',
    redirectUri: window.location.origin,

    // The SPA's id.
    // The SPA is registerd with this id at the auth-server
    clientId: 'zone-java-app',
    dummyClientSecret: 'e752074c-6086-4e4d-9b36-db1d9ffb79dc',
    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: true,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
  },
  endpointUrl: {
    test: {
      getAdminOrUSer: serviceUrls.test.baseUrl + '/userOrAdmin',
      getAdmin: serviceUrls.test.baseUrl + '/admin',
      getPublic: serviceUrls.test.baseUrl + '/public'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
