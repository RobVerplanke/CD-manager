const buildRatingStars = require('./buildRatingStars.js');

function buildRatingOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');

  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  for (let i = 1; i <= 5; i++) {
    const newOption = document.createElement('option');
    newOption.textContent = buildRatingStars(i);
    selectElement.append(newOption);
  }
}

module.exports = buildRatingOptions;
