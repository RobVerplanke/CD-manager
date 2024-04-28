const buildRatingOptions = require('./buildRatingOptions.js');
const buildSelectOptions = require('./buildSelectOptions.js');
const buildYearOptions = require('./buildYearOptions.js');

// Creates an input element and set the attributes and values where needed
function createFormInput(labelText, type, element, placeholder, value) {

  // Create a new input holder, a label and a element
  const holder = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement(element);

  // Set all relevant attributes and values
  holder.classList.add('form-input-holder');
  label.classList.add('form-label');
  label.setAttribute('for', labelText.toLowerCase());
  label.textContent = `${labelText}:`;

  input.setAttribute('type', type);
  input.setAttribute('id', labelText.toLowerCase());
  input.setAttribute('name', labelText.toLowerCase());
  input.setAttribute('placeholder', placeholder);

  // Use the corresponding build function for each select-element to fill the options with data
  if (labelText === 'Rating') buildRatingOptions(input);
  if (labelText === 'Year') buildYearOptions(input);

  // The album and CD options need to be build in a callback because it needs a api request.
  if (labelText === 'Album' || labelText === 'Cd') {
    buildSelectOptions(input, () => {
      input.value = value;
    });
  }

  // In case the edit-form is being build.
  // All input fields are filled with the current data of the item
  // Use the corresponding methods to change the preset values for each type of element
  if (value) {
    switch (element) {
      case 'textarea': input.textContent = value;
        break;
      case 'select': input.value = value;
        break;
      default: input.setAttribute('value', value);
        break;
    }
  }

  // Add the input-holder, with a label and a element, to the form
  holder.append(label, input);

  return holder;
}


module.exports = createFormInput;
