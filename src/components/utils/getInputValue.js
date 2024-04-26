function getInputValue(inputID) {
  const element = document.querySelector(`#${inputID}`);
  return element.value;
}

module.exports = getInputValue;
