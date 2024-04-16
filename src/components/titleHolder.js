const { contentHolder } = require('./commonElements.js');

// Clear all content before adding new content
function clearContentHolder() {
  contentHolder.innerHTML = '';
}

// Set the title
function setTitle(title) {

  // Create new title
  const titleElement = document.createElement('div');

  // Set attributes
  titleElement.classList.add('title-holder');
  titleElement.textContent = title; // Set text of the title

  // Remove current title from the page if there is one
  if (contentHolder.firstChild) clearContentHolder();

  // Add new title to the content
  contentHolder.append(titleElement);
}

module.exports = setTitle;
