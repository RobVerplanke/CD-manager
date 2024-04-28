// Returns the corresponding CD of the given ID
async function getItemByID(itemType, ID) {

  // Get current data
  const url = `http://localhost:3000/${itemType}s`;
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select item based on the same ID
  return data.find((item) => item.id === ID);
}

module.exports = getItemByID;
