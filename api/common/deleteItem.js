// Remove a item from the collection
const deleteItem = async (item, trackID) => {

  try {
    // Adjust the path to remove the corresonding item
    const url = `http://localhost:3000/${item}s/${trackID}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete item');
    }

    console.log('Item deleted successfully');
  } catch (error) {
    console.error('Error deleting item:', error.message);
  }
};

module.exports = deleteItem;
