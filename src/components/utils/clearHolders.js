const { pageHolder, titleHolder, contentHolder } = require('./commonElements.js');

// Clear all content before adding new content
function clearContentHolders() {
  pageHolder.innerHTML = '';
  titleHolder.innerHTML = '';
  contentHolder.innerHTML = '';
}

module.exports = clearContentHolders;
