const { pageHolder, titleHolder } = require('./commonElements.js');

// Set the title above the content section
function setTitle(title) {
  titleHolder.textContent = title; // Set text of the title
  pageHolder.append(titleHolder);
}

module.exports = setTitle;
