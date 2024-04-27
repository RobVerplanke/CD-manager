function buildRatingStars(amount) {
  let starsList = '';

  for (let i = 0; i < amount; i++) {
    // starsList += '⭐';
    starsList = i;
  }
  return starsList;
}

module.exports = buildRatingStars;
