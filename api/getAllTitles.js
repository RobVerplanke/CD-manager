// Get the titles of all items in the collection
async function getAllTitles(itemType) {
  const list = [];

  // Get current data
  const url = `http://localhost:3000/${itemType}s`;
  const result = await fetch(url);
  const data = await result.json();

  // Add each title to the list
  data.forEach((item) => {
    list.push([item.title]);
  });

  return list;
}

module.exports = getAllTitles;
