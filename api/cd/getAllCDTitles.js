// Get the titles of all CDs in the collection
async function getAllCDTitles() {
  const list = [];

  // Get current data
  const url = 'http://localhost:3000/cds';
  const result = await fetch(url);
  const data = await result.json();

  // Add each title to the list
  data.forEach((cd) => {
    list.push([cd.title]);
  });

  return list;
}

module.exports = getAllCDTitles;
