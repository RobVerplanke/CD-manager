const commonElements = require('./commonElements.js');

// Clear all the content from the page so a new page can be build
function clearContentHolders() {
  while (commonElements.contentHolder.firstChild) {
    commonElements.contentHolder.removeChild(commonElements.contentHolder.firstChild);
  }

  const formElement = document.createElement('form');

  formElement.setAttribute('id', 'form');
  commonElements.contentHolder.appendChild(formElement);
  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = clearContentHolders;
