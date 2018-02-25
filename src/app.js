const app = angular
	.module('app', [])
	.controller('appController', AppController)
	.controller('createAccountController', CreateAccountController)
	.controller('socialProfilesController', SocialProfilesController)
	.controller('personalDetailsController', PersonalDetailsController)
	.service('dataStoreService', DataStoreService);

function AppController($scope) {
	$scope.title = 'appcontroller';
	$scope.showCreateAccountForm = true;
	$scope.showSocialProfilesForm = false;
	$scope.showPersonalDetailsForm = false;
}

function CreateAccountController($scope) {
	$scope.email = '';
	$scope.password = '';
	$scope.confirmPassword = '';

	$scope.next = function() {
		console.log($scope);
		console.log($scope.$parent);

		$scope.$parent.showCreateAccountForm = false;
		$scope.$parent.showSocialProfilesForm = true;

		$scope.title = 'updated title';
		// $scope.$apply();
	};
}

function SocialProfilesController($scope) {}

function PersonalDetailsController($scope) {}

function DataStoreService() {}
