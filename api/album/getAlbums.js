// Don't import from the index file, as it may cause asynchronous issues
const { pageHolder, contentHolder } = require('../../src/components/utils/commonElements.js');
const buildEditAlbumForm = require('../../src/components/forms/album/editAlbum.js');

async function getAlbumsHTML(searchKeyword) {

  const url = 'http://localhost:3000/albums';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const searchTerm = searchKeyword;
  const filteredAlbums = data.filter((album) => album.title.includes(searchTerm) || album.artist.includes(searchTerm));

  contentHolder.classList.remove('img-in-item');
  contentHolder.classList.add('no-img-in-item');

  let template = `
  <table class="albums-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>CDs</th>
        <th></th>
      </tr>
    </thead>
    <tbody>`;

  filteredAlbums.forEach((album) => {
    template += `
      <tr>
        <td>${album.title}</td>
        <td>${album.artist}</td>
        <td>${album.cds.length}</td>
        <td><a class="edit-link" data-trackID="${album.id}" href="#">edit</a<</td>
      </tr>
    `;
  });

  function handleEditClick(trackID) {
    buildEditAlbumForm(trackID);
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

module.exports = getAlbumsHTML;
