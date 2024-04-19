const { setTitle } = require('../components/index.js');
const clearContentHolder = require('../utils/dom.js');

// Create the profile page with individual components
function buildProfilePage() {

  clearContentHolder();

  setTitle('Your profile');
}

module.exports = buildProfilePage;
