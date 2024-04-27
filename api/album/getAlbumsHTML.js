// Don't import from the index file, as it may cause asynchronous issues
const { commonElements } = require('../../src/components/utils/commonElements.js');

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

  commonElements.contentHolder.innerHTML += template;

  commonElements.contentHolder.classList.remove('no-img-in-item');
  commonElements.contentHolder.classList.add('img-in-item');

  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getAlbumsHTML;
