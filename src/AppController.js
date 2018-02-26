function AppController($scope) {
  // control which form gets displayed
  $scope.showCreateAccountForm = true;
  $scope.showSocialProfilesForm = false;
  $scope.showPersonalDetailsForm = false;

  // navigate between forms
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

module.exports = AppController;
