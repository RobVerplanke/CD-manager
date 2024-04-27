// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../../src/components/utils/commonElements.js');
const buildEditCDForm = require('../../src/components/forms/cd/editCD.js');

async function getCDsResult(searchKeyword) {

  const url = 'http://localhost:3000/cds';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const searchTerm = searchKeyword;
  const filteredCDs = data.filter((cd) => cd.title.includes(searchTerm) || cd.artist.includes(searchTerm));

  commonElements.contentHolder.classList.remove('img-in-item');
  commonElements.contentHolder.classList.add('no-img-in-item');

  let template = `
  <table class="cds-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Tracks</th>
        <th></th>
      </tr>
    </thead>
    <tbody>`;

  filteredCDs.forEach((cd) => {
    template += `
      <tr>
        <td>${cd.title}</td>
        <td>${cd.artist}</td>
        <td>${cd.tracks.length}</td>
        <td><a class="edit-link" data-trackID="${cd.id}" href="#">edit</a<</td>
      </tr>
    `;
  });

  function handleEditClick(trackID) {
    buildEditCDForm(trackID);
    // Voer hier de code uit die je wilt uitvoeren wanneer op de edit-link wordt geklikt
  }

  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('edit-link')) {
      e.preventDefault(); // Voorkomt dat de link naar een andere pagina gaat

      // Hier roep je de functie aan die je wilt uitvoeren
      handleEditClick(e.target.getAttribute('data-trackID'));
    }
  });

  template += '</tbody></table>';

  commonElements.contentHolder.innerHTML += template;

  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getCDsResult;
