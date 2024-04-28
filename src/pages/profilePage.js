const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the profile page after clearing the page from any other content
function buildProfilePage() {

  clearContentHolders();

  setTitle('Your profile');
}

module.exports = buildProfilePage;
