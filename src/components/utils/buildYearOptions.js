function buildYearOptions(element) {
  const selectElement = element;

  for (let i = new Date().getFullYear(); i > 1900; i--) {
    const newOption = document.createElement('option');
    newOption.textContent = i;
    selectElement.append(newOption);
  }
}

module.exports = buildYearOptions;
