// Don't import from the index file, as it may cause asynchronous issues
const { pageHolder, contentHolder } = require('../../src/components/utils/commonElements.js');
// const { buildCheckbox } = require('../../src/components/forms/utils.js');


async function getTracksHTML() {

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

  contentHolder.innerHTML += template;

  contentHolder.classList.remove('img-in-item');
  contentHolder.classList.add('no-img-in-item');

  pageHolder.append(contentHolder);
}

module.exports = getTracksHTML;
