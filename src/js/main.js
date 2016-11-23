import angular from 'angular';

import { routerConfig } from './routes';
import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
import { DetailsController } from './controllers/details';
import { ContactService } from './services/contact-server';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('DetailsController', DetailsController)
  .controller('AddController', AddController)
  .service('ContactService',ContactService)