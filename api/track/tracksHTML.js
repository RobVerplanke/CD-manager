// Don't import from the index file, as it may cause asynchronous issues
const { pageHolder, contentHolder } = require('../../src/components/utils/commonElements.js');

async function getTracksHTML() {
  const url = 'http://localhost:3000/tracks';

  const result = await fetch(url);
  const data = await result.json();

  let template = '';

  data.forEach((track) => {
    template += `
    <ul class="items-list-no-img">
      <li class="list-item text-title-dark"><p>${track.title}</p></li>
      <li class="list-item text-artist-dark"><p>${track.artist}</p></li>
      <li class="list-item text-artist-dark"><p>length: <strong>${track.length}</strong></p></li>
    </ul>
    `;
  });

  contentHolder.innerHTML += template;

  contentHolder.classList.remove('img-in-item');
  contentHolder.classList.add('no-img-in-item');

  pageHolder.append(contentHolder);
}

module.exports = getTracksHTML;
