// Returns the value of a given input-element
function getInputValue(inputID) {
  const element = document.querySelector(`#${inputID}`);
  return element.value;
}

module.exports = getInputValue;
