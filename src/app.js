const app = angular
	.module('app', ['ngMessages'])
	.controller('appController', AppController);
// .controller('createAccountController', CreateAccountController)
// .controller('socialProfilesController', SocialProfilesController)
// .controller('personalDetailsController', PersonalDetailsController)
// .service('dataStoreService', DataStoreService);

function AppController($scope) {
	// control which form gets displayed
	$scope.showCreateAccountForm = true;
	$scope.showSocialProfilesForm = false;
	$scope.showPersonalDetailsForm = false;

	// data for create account form
	$scope.account = {
		email: '',
		password: '',
		confirmPassword: ''
	};

	// data for social profiles form
	$scope.social = {
		twitter: '',
		facebook: '',
		googlePlus: ''
	};

	// data for personal details form

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

	$scope.matchPasswords = () => {
		$scope.createAccountForm.confirmPassword.$error.doNotMatch =
			$scope.confirmPassword && $scope.password !== $scope.confirmPassword;
	};
}

// function CreateAccountController($scope) {
// 	$scope.email = '';
// 	$scope.password = '';
// 	$scope.confirmPassword = '';

// 	$scope.next = function() {
// 		console.log($scope);
// 		console.log($scope.$parent);

// 		$scope.$parent.showCreateAccountForm = false;
// 		$scope.$parent.showSocialProfilesForm = true;

// 		$scope.title = 'updated title';
// 		// $scope.$apply();
// 	};
// }

// function SocialProfilesController($scope) {}

// function PersonalDetailsController($scope) {}

// function DataStoreService() {}
