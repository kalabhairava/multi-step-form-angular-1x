const app = angular
  .module('app', ['ngMessages'])
  .controller('appController', AppController)
  .controller('createAccountController', CreateAccountController)
  .controller('socialProfilesController', SocialProfilesController)
  .controller('personalDetailsController', PersonalDetailsController);

function AppController($scope) {
  // control which form gets displayed
  $scope.showCreateAccountForm = true;
  $scope.showSocialProfilesForm = false;
  $scope.showPersonalDetailsForm = false;

  $scope.goto = function(form) {
    switch (form) {
      case 'CREATE_ACCOUNT':
        $scope.showCreateAccountForm = true;
        $scope.showSocialProfilesForm = false;
        $scope.showPersonalDetailsForm = false;
        break;

      case 'SOCIAL_MEDIA':
        $scope.showCreateAccountForm = false;
        $scope.showSocialProfilesForm = true;
        $scope.showPersonalDetailsForm = false;
        break;

      case 'PERSONAL_DETAILS':
        $scope.showCreateAccountForm = false;
        $scope.showSocialProfilesForm = false;
        $scope.showPersonalDetailsForm = true;
        break;

      case 'SUBMIT':
        alert('Details submitted');
        break;

      default:
        $scope.showCreateAccountForm = true;
        $scope.showSocialProfilesForm = false;
        $scope.showPersonalDetailsForm = false;
    }
  };
}

function CreateAccountController($scope) {
  $scope.account = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  $scope.matchPasswords = () => {
    const { password, confirmPassword } = $scope.account;

    if (confirmPassword && password !== confirmPassword) {
      $scope.createAccountForm.$invalid = true;
      $scope.createAccountForm.confirmPassword.$error.doNotMatch = true;
    } else {
      $scope.createAccountForm.confirmPassword.$error.doNotMatch = false;
    }
  };
}

function SocialProfilesController($scope) {
  $scope.social = {
    twitter: '',
    facebook: '',
    googlePlus: ''
  };
}

function PersonalDetailsController($scope) {
  $scope.personalDetails = {
    firstName: '',
    lastName: '',
    phone: null,
    address: ''
  };
}
