// Edit a existing CD
async function updateCD(itemType, CDID, updatedItemData) {

  // Get current data
  const url = `http://localhost:3000/${itemType}s/${CDID}`; // Update URL with trackID
  const result = await fetch(url);
  const item = await result.json();

  if (item) {
    // Replace item
    const updatedItem = { ...item, ...updatedItemData };

    // Write the edited data back
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    console.log(`${itemType} met ID ${CDID} is succesvol bijgewerkt.`);
  } else {
    console.log(`${itemType} met ID ${CDID} is niet gevonden.`);
  }
}

module.exports = updateCD;
