const { pageHolder, contentHolder } = require('./commonElements.js');

function clearContentHolders() {
  while (contentHolder.firstChild) {
    contentHolder.removeChild(contentHolder.firstChild);
  }

  const formElement = document.createElement('form');

  formElement.setAttribute('id', 'form');
  contentHolder.appendChild(formElement);
  pageHolder.append(contentHolder);
}

module.exports = clearContentHolders;
