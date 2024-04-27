const commonElements = require('./commonElements.js');

// Set the title above the content section
function setTitle(title) {
  commonElements.titleHolder.textContent = title; // Set text of the title
}

module.exports = setTitle;
