// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../../src/components/utils/commonElements.js');
const buildEditAlbumForm = require('../../src/components/forms/album/editAlbum.js');

// Build a overview page with items that contain the keyword title or artist name
async function getAlbumsResult(searchKeyword) {

  // Get current data
  const url = 'http://localhost:3000/albums';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select all items which has a title or artistname containing the search keyword
  const searchTerm = searchKeyword;
  const filteredAlbums = data.filter((album) => album.title.includes(searchTerm)
  || album.artist.includes(searchTerm));

  // The result page contains no cover images
  commonElements.contentHolder.classList.remove('img-in-item');
  commonElements.contentHolder.classList.add('no-img-in-item');

  // Build a table to display all the found albums and add a edit button at the end of each row
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

  // Build a new row for each album
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

  // After a edit link is clicked, redirect the user to the edit form
  function handleEditClick(trackID) {
    buildEditAlbumForm(trackID);
    // Voer hier de code uit die je wilt uitvoeren wanneer op de edit-link wordt geklikt
  }

  // Select each edit link
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('edit-link')) {
      e.preventDefault();

      handleEditClick(e.target.getAttribute('data-trackID'));
    }
  });

  template += '</tbody></table>';

  commonElements.contentHolder.innerHTML += template;
  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getAlbumsResult;
