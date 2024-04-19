const { pageHolder, titleHolder } = require('./commonElements.js');

// Set the title
function setTitle(title) {
  titleHolder.textContent = title; // Set text of the title
  pageHolder.append(titleHolder);
}

module.exports = setTitle;
