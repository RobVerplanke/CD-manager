const { pageHolder, titleHolder, contentHolder } = require('../components/index.js');

// Clear all content before adding new content
function clearContentHolder() {
  pageHolder.innerHTML = '';
  titleHolder.innerHTML = '';
  contentHolder.innerHTML = '';
}

module.exports = clearContentHolder;
