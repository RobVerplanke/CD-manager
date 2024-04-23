const { pageHolder, contentHolder } = require('./commonElements.js');

// Clear all content before adding new content
function clearContentHolders() {
  contentHolder.innerHTML = '<form id ="form"></form>';
  pageHolder.append(contentHolder);
}

module.exports = clearContentHolders;
