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

module.exports = CreateAccountController;
