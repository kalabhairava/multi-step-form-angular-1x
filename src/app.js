require('angular');
require('angular-messages');
const AppController = require('./AppController');
const CreateAccountController = require('./views/createAccount/CreateAccountController');
const SocialProfilesController = require('./views/socialProfiles/SocialProfilesController');
const PersonalDetailsController = require('./views/personalDetails/PersonalDetailsController');

const app = angular
  .module('app', ['ngMessages'])
  .controller('appController', AppController)
  .controller('createAccountController', CreateAccountController)
  .controller('socialProfilesController', SocialProfilesController)
  .controller('personalDetailsController', PersonalDetailsController);
