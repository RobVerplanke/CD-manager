const buildRatingStars = require('./buildRatingStars.js');

const MIN_RATING_VALUE = 1;
const MAX_RATING_VALUE = 5;

// Create slection options for the 'Rating' value, in a certain range
function buildRatingOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');

  // Create and add a neutral default option
  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  // Build a selectable option for each rating unit
  for (let i = MIN_RATING_VALUE; i <= MAX_RATING_VALUE; i++) {
    const newOption = document.createElement('option');
    newOption.textContent = buildRatingStars(i);
    selectElement.append(newOption);
  }
}

module.exports = buildRatingOptions;
