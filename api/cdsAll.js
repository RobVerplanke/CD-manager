const { pageHolder, contentHolder } = require('../src/components/index.js');

async function renderCDs() {
  const url = 'http://localhost:3000/cds';

  const result = await fetch(url);
  const data = await result.json();

  let template = '';

  data.forEach((cd) => {
    template += `
    <ul class="items-list">
      <li class="list-img"><img width="150px" height="auto" src="${cd.img}"></li>
      <li class="list-item text-album"><p>${cd.album}</p></li>
      <li class="list-item text-title-light"><p>${cd.title}</p></li>
      <li class="list-item text-artist-light"><p>${cd.artist}</p></li>
    </ul>
    `;
  });

  contentHolder.innerHTML += template;

  contentHolder.classList.remove('no-img-in-item');
  contentHolder.classList.add('img-in-item');

  pageHolder.append(contentHolder);
}

module.exports = renderCDs;
