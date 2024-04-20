// const Controller = require('./controller/Controller.js');
// const User = require('./modules/User.js');
const setNavEventListeners = require('./components/nav/navBar.js');
const buildHomePage = require('./pages/homePage.js');


// // Test account
// const _USERNAME = 'admin';

// // Create a new user with acces to all the controller-methods
// const controller = new Controller();
// const user = new User(controller, _USERNAME);

// Activate navigation buttons
document.addEventListener('DOMContentLoaded', () => {
  setNavEventListeners();
});


// Start on default page
buildHomePage();
