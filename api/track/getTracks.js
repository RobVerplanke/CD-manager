// Don't import from the index file, as it may cause asynchronous issues
const { pageHolder, contentHolder } = require('../../src/components/utils/commonElements.js');
const buildEditTrackForm = require('../../src/components/forms/track/editTrack.js');

async function getTracksHTML(searchKeyword) {

  const url = 'http://localhost:3000/tracks';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const searchTerm = searchKeyword;
  const filteredTracks = data.filter((track) => track.title.includes(searchTerm) || track.artist.includes(searchTerm));

  contentHolder.classList.remove('img-in-item');
  contentHolder.classList.add('no-img-in-item');

  let template = `
  <table class="tracks-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Length</th>
        <th></th>
      </tr>
    </thead>
    <tbody>`;

  filteredTracks.forEach((track) => {
    template += `
      <tr>
        <td>${track.title}</td>
        <td>${track.artist}</td>
        <td>${track.length}</td>
        <td><a class="edit-link" data-trackID="${track.id}" href="#">edit</a<</td>
      </tr>
    `;
  });

  function handleEditClick(trackID) {
    buildEditTrackForm(trackID);
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

  contentHolder.innerHTML += template;

  pageHolder.append(contentHolder);
}

module.exports = getTracksHTML;
