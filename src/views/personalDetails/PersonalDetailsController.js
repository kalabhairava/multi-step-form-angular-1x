function PersonalDetailsController($scope) {
  $scope.personalDetails = {
    firstName: '',
    lastName: '',
    phone: null,
    address: ''
  };
}

module.exports = PersonalDetailsController;
