const { clearContentHolders, setTitle } = require('../components/index.js');

// Create the profile page with individual components
function buildProfilePage() {

  clearContentHolders();

  setTitle('Your profile');
}

module.exports = buildProfilePage;
