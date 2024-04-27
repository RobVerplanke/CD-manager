const buildRatingOptions = require('./buildRatingOptions.js');
const buildSelectOptions = require('./buildSelectOptions.js');
const buildYearOptions = require('./buildYearOptions.js');

function createFormInput(labelText, type, element, placeholder, value) {

  const holder = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement(element);

  holder.classList.add('form-input-holder');
  label.classList.add('form-label');
  label.setAttribute('for', labelText.toLowerCase());
  label.textContent = `${labelText}:`;

  input.setAttribute('type', type);
  input.setAttribute('id', labelText.toLowerCase());
  input.setAttribute('name', labelText.toLowerCase());
  input.setAttribute('placeholder', placeholder);


  if (labelText === 'Rating') buildRatingOptions(input);
  if (labelText === 'Year') buildYearOptions(input);

  if (labelText === 'Album' || labelText === 'Cd') {
    buildSelectOptions(input, () => {
      input.value = value;
    });
  }

  // In case when the edit-form is called:
  // set the value of the input fields with the current data
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

  holder.append(label, input);

  return holder;
}


module.exports = createFormInput;
