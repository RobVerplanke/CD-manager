const Controller = require('./controller/Controller.js');
const User = require('./modules/User.js');

// Test account
const _USERNAME = 'admin';

// Create a new user with acces to all the controller-methods
const controller = new Controller();
const user = new User(controller, _USERNAME);

