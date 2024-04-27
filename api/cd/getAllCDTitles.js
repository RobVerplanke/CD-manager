async function getAllCDTitles() {
  const list = [];
  const url = 'http://localhost:3000/cds';

  const result = await fetch(url);
  const data = await result.json();


  data.forEach((cd) => {
    list.push([cd.title]);
  });

  return list;
}

module.exports = getAllCDTitles;
