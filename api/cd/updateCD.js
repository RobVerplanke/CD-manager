// Edit a existing CD
async function updateCD(CDID, updatedCDData) {

  // Get current data
  const url = `http://localhost:3000/cds/${CDID}`; // Update URL with trackID
  const result = await fetch(url);
  const cd = await result.json();

  if (cd) {
    // Replace item
    const updatedCD = { ...cd, ...updatedCDData };

    // Write the edited data back
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCD),
    });

    console.log(`CD met ID ${CDID} is succesvol bijgewerkt.`);
  } else {
    console.log(`CD met ID ${CDID} is niet gevonden.`);
  }
}

module.exports = updateCD;
