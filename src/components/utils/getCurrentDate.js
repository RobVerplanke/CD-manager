// Gives the current data in a prefered format
function getCurrentDate() {

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${mm}-${dd}-${yyyy}`;

  return today;
}

module.exports = getCurrentDate;
