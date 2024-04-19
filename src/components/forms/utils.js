function buildYearOptions(element) {
  const selectElement = element;
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i > 1900; i--) {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', i);
    newOption.textContent = i;
    selectElement.append(newOption);
  }
}

function createFormInput(labelText, type, element, placeholder) {
  const holder = document.createElement('div');
  holder.classList.add('form-input-holder');

  const label = document.createElement('label');
  label.textContent = `${labelText}:`;
  label.classList.add('form-label');
  label.setAttribute('for', labelText.toLowerCase());

  const input = document.createElement(element);
  input.setAttribute('type', type);
  input.setAttribute('id', labelText.toLowerCase());
  input.setAttribute('name', labelText.toLowerCase());
  input.setAttribute('placeholder', placeholder);

  if (type === 'file') input.setAttribute('accept', 'image/png, image/jpeg');
  if (labelText === 'Year') buildYearOptions(input);


  holder.append(label, input);

  return holder;
}

module.exports = createFormInput;
