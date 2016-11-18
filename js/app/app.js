angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
    	$stateProvider
    		.state('home', {
    			url: '/',
    			templateUrl: 'views/home.html',
    			controller: 'HomeController'
    		})
    		.state('home.notifications', {
    			url: 'notifications',
    			templateUrl: 'views/home/notifications.html',
    			controller: 'NotificationsHomeController'
    		})
    		.state('home.timeline', {
    			url: 'timeline',
    			templateUrl: 'views/home/timeline.html',
    			controller: 'TimelineHomeController'
    		})
    		.state('home.user', {
    			url: 'user',
    			templateUrl: 'views/home/user.html',
    			controller: 'UserHomeController'
    		});
    });