// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../../src/components/utils/commonElements.js');

// Build the overview page
async function getTracksHTML() {

  // Get current data
  const url = 'http://localhost:3000/tracks';
  const result = await fetch(url);
  const data = await result.json();

  let template = `<table class="tracks-table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Artist</th>
      <th>Length</th>
    </tr>
  </thead>
  <tbody>`;

  // Show the cover, title and artistname for each track
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

  commonElements.contentHolder.innerHTML += template;

  // The overview page doesn't contain cover images
  commonElements.contentHolder.classList.remove('img-in-item');
  commonElements.contentHolder.classList.add('no-img-in-item');

  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getTracksHTML;
