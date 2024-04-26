// Don't import from the index file, as it may cause asynchronous issues
const { pageHolder, contentHolder } = require('../../src/components/utils/commonElements.js');

async function getAlbumsHTML() {
  const url = 'http://localhost:3000/albums';

  const result = await fetch(url);
  const data = await result.json();

  let template = '';

  data.forEach((album) => {
    template += `
    <ul class="items-list">
      <li class="list-img"><img width="150px" height="auto" src="${album.image}"></li>
      <li class="list-item text-title-light"><p>${album.title}</p></li>
      <li class="list-item text-artist-light"><p>${album.artist}</p></li>
    </ul>
    `;
  });

  contentHolder.innerHTML += template;

  contentHolder.classList.remove('no-img-in-item');
  contentHolder.classList.add('img-in-item');

  pageHolder.append(contentHolder);
}

module.exports = getAlbumsHTML;
