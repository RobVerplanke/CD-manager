async function updateCD(CDID, updatedCDData) {
  // Stap 1: Haal de huidige data op
  const url = `http://localhost:3000/cds/${CDID}`; // Update URL met trackID
  const result = await fetch(url);
  const cd = await result.json();

  if (cd) {
    // Stap 2: Vervang het item
    const updatedCD = { ...cd, ...updatedCDData };

    // Stap 3: Schrijf de bijgewerkte data terug
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
