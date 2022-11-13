/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-7l31l6kzr0o27sbt.us', // the auth0 domain prefix
    audience: 'privoas.coffeeshop', // the audience set for the auth0 app
    clientId: 'Kmaq8b2crqDg0hVAnZ2VqukbBnA8ybVI', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
