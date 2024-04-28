// Returns the corresponding CD of the given ID
async function getCDByID(CDID) {

  // Get current data
  const url = 'http://localhost:3000/cds';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select CD based on the same ID
  return data.find((cd) => cd.id === CDID);
}

module.exports = getCDByID;
