// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../src/components/utils/commonElements.js');

// Build the overview page
async function getItemsHTML(itemType) {

  // Get current data
  const url = `http://localhost:3000/${itemType}s`;
  const result = await fetch(url);
  const data = await result.json();

  let template = '';

  // Build overview pages
  switch (itemType) {
    case 'cd':

      // Build a list with a cover image, album name (if present), title and artistname for each CD
      data.forEach((cd) => {
        template += `
        <ul class="items-list">
          <li class="list-img"><img width="150px" height="auto" src="${cd.image}"></li>
          <li class="list-item text-album"><p>${cd.album}</p></li>
          <li class="list-item text-title-light"><p>${cd.title}</p></li>
          <li class="list-item text-artist-light"><p>${cd.artist}</p></li>
        </ul>
        `;
      });
      break;

    case 'album':

      // Build a list with a cover image, title and artistname for each album
      data.forEach((album) => {
        template += `
          <ul class="items-list">
            <li class="list-img"><img width="150px" height="auto" src="${album.image}"></li>
            <li class="list-item text-title-light"><p>${album.title}</p></li>
            <li class="list-item text-artist-light"><p>${album.artist}</p></li>
          </ul>
          `;
      });
      break;

    case 'track':

      // Build a table for the tracks overview page
      template = `
      <table class="tracks-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>`;

      // Show the title and artistname and length for each track
      data.forEach((track) => {
        template += `
              <tr>
                <td>${track.title}</td>
                <td>${track.artist}</td>
                <td>${track.length}</td>
              </tr>
          `;
      });
      template += '</tbody></table>';

      break;
    default:
  }

  commonElements.contentHolder.innerHTML += template;

  // The overview page does contain cover images
  commonElements.contentHolder.classList.remove('no-img-in-item');
  commonElements.contentHolder.classList.add('img-in-item');

  // Add built list/table to the page
  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getItemsHTML;
