// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../src/components/utils/commonElements.js');
const buildEditItemForm = require('../src/components/forms/editItem.js');
const deleteItem = require('./deleteItem.js');
const { buildAlbumsAllPage } = require('../src/pages/album/index.js');
const { buildCDsAllPage } = require('../src/pages/cd/index.js');
const { buildTracksAllPage } = require('../src/pages/track/index.js');

// Build a overview page with items that contain the keyword title or artist name
async function getSearchResult(itemType, action, searchKeyword) {

  // Get current data
  const url = `http://localhost:3000/${itemType}s`;
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select all items which has a title or artistname containing the search keyword
  const searchTerm = searchKeyword;
  const filteredItems = data.filter((item) => item.title.includes(searchTerm)
  || item.artist.includes(searchTerm));

  // The result page contains no cover images
  commonElements.contentHolder.classList.remove('img-in-item');
  commonElements.contentHolder.classList.add('no-img-in-item');

  // Build a table to display all found items and add a edit/delete button at the end of each row
  let template = `
  <table class="cds-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>`;

  // Set head-title for third column
  if (itemType === 'album') template += '<th>CDs</th>';
  if (itemType === 'cd') template += '<th>Tracks</th>';
  if (itemType === 'track') template += '<th>Length</th>';

  template += `
        <th>${action}</th>
      </tr>
    </thead>
    <tbody>`;

  // Build a new row for each item
  filteredItems.forEach((item) => {
    template += `
      <tr>
        <td>${item.title}</td>
        <td>${item.artist}</td>`;

    // Set content of third column
    if (itemType === 'album') template += `<td>${item.cds.length}</td>`;
    if (itemType === 'cd') template += `<td>${item.tracks.length}</td>`;
    if (itemType === 'track') template += `<td>${item.length}</td>`;

    // Set attributes
    template += `
          <td><a class="${action}-link" data-itemID="${item.id}" href="#">${action}</a></td>
      </tr>
    `;
  });

  // After a edit/delete link is clicked, redirect the user to the corresponding form
  async function handleClick(itemID) {

    // Redirect to edit form
    if (action === 'edit') buildEditItemForm(itemType, itemID);

    if (action === 'delete') {
      // Wait for API module to remove item
      await deleteItem(itemType, itemID);

      // Redirect to updated overview page
      if (itemType === 'album') buildAlbumsAllPage();
      if (itemType === 'cd') buildCDsAllPage();
      if (itemType === 'track') buildTracksAllPage();
    }
  }

  // Select each edit/delete link
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(`${action}-link`)) {
      e.preventDefault();

      handleClick(e.target.getAttribute('data-itemID'));
    }
  });

  template += '</tbody></table>';

  // Add built table to the page
  commonElements.contentHolder.innerHTML += template;
  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getSearchResult;
