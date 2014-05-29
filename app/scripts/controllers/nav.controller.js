'use strict';

angular.module('playdateApp')
	.controller('NavCtrl', function ($scope, $location) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.navItems = [
			{name: 'About', href: 'about'},
			{name: 'Events', href: 'events'},
			{name: 'Sponsors', href: 'sponsors'},
			{name: 'Get Involved', href: 'get-involved'},
			{name: 'Blog', href: 'blog'},
			{name: 'Contact', href: 'contact'}
		];

		$scope.navClass = function (page) {
			var currentRoute = $location.path().substring(1) || 'home';
			return page === currentRoute ? 'active' : '';
		};

		$scope.toggleNav = function () {

			$scope.navOn = false;
		};

		$scope.toggleNavBtn = function () {

			$scope.navOn = !$scope.navOn;
		};
	});