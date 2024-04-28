// Create a list of numbers as options in the 'Year'-selectelement, representing years
const MIN_YEAR = 1900;
const MAX_YEAR = new Date().getFullYear(); // Current year

function buildYearOptions(element) {
  const selectElement = element;

  for (let i = MAX_YEAR; i > MIN_YEAR; i--) {
    const newOption = document.createElement('option');
    newOption.textContent = i;
    selectElement.append(newOption);
  }
}

module.exports = buildYearOptions;
