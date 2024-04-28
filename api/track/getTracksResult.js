// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../../src/components/utils/commonElements.js');
const buildEditTrackForm = require('../../src/components/forms/track/editTrack.js');
const deleteItem = require('../common/deleteItem.js');
const viewAllTracks = require('../../src/pages/track/viewAllTracks.js');

// Build a overview page with items that contain the keyword title or artist name
async function getTracksResult(action, searchKeyword) {

  // Get current data
  const url = 'http://localhost:3000/tracks';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select all items which has a title or artistname containing the search keyword
  const searchTerm = searchKeyword;
  const filteredTracks = data.filter((track) => track.title.includes(searchTerm)
  || track.artist.includes(searchTerm));

  // The result page contains no cover images
  commonElements.contentHolder.classList.remove('img-in-item');
  commonElements.contentHolder.classList.add('no-img-in-item');

  // Build a table to display all the found tracks and add a edit button at the end of each row
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

  // Build a new row for each track
  filteredTracks.forEach((track) => {
    template += `
      <tr>
        <td>${track.title}</td>
        <td>${track.artist}</td>
        <td>${track.length}</td>
        <td><a class="${action}-link" data-trackID="${track.id}" href="#">${action}</a<</td>
      </tr>
    `;
  });

  // After a edit link is clicked, redirect the user to the edit form
  async function handleClick(trackID) {
    if (action === 'edit') buildEditTrackForm(trackID);
    if (action === 'delete') {

      // Wait for API module to remove the track from the collection
      await deleteItem('track', trackID);

      // Redirect to updated overview page
      viewAllTracks();
    }
  }

  // Select each edit link
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(`${action}-link`)) {
      e.preventDefault();

      handleClick(e.target.getAttribute('data-trackID'));
    }
  });

  template += '</tbody></table>';

  commonElements.contentHolder.innerHTML += template;
  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getTracksResult;
