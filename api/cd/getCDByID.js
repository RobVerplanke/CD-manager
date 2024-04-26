async function getCDByID(CDID) {
  const url = 'http://localhost:3000/cds';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const foundCD = data.find((cd) => cd.id === CDID);

  return foundCD;
}

module.exports = getCDByID;
