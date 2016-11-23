function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: 'templates/home.tpl.html',
	      controller: 'HomeController as home'
	    })

	    .state('details', {
	      url: '/details/:id',
	      templateUrl: 'templates/details.tpl.html',
	      controller: 'DetailsController as details'
	    })

	    .state('add', {
	      url: '/add',
	      templateUrl: 'templates/add.tpl.html',
	      controller: 'AddController as add'
	    });

	    $urlRouterProvider.otherwise('/');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };