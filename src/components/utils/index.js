const setTitle = require('./setTitle.js');
const clearContentHolders = require('./clearHolders.js');
const getInputValue = require('./getInputValue.js');
const createFormInput = require('./createFormInput.js');
const getCurrentDate = require('./getCurrentDate.js');
const buildRatingStars = require('./buildRatingStars.js');
const buildRatingOptions = require('./buildRatingOptions.js');
const buildYearOptions = require('./buildYearOptions.js');
const buildSelectOptions = require('./buildSelectOptions.js');

// Get all needed elements in the DOM, no functions
const { commonElements } = require('./commonElements.js');

module.exports = {
  setTitle,
  clearContentHolders,
  getInputValue,
  createFormInput,
  getCurrentDate,
  buildRatingStars,
  buildRatingOptions,
  buildYearOptions,
  buildSelectOptions,
  commonElements,
};
