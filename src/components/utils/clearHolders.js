const { commonElements } = require('./index.js');

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
