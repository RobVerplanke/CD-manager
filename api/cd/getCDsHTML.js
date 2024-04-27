// Don't import from the index file, as it may cause asynchronous issues
const commonElements = require('../../src/components/utils/commonElements.js');

async function getCDsHTML() {
  const url = 'http://localhost:3000/cds';

  const result = await fetch(url);
  const data = await result.json();

  let template = '';

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

  commonElements.contentHolder.innerHTML += template;

  commonElements.contentHolder.classList.remove('no-img-in-item');
  commonElements.contentHolder.classList.add('img-in-item');

  commonElements.pageHolder.append(commonElements.contentHolder);
}

module.exports = getCDsHTML;
