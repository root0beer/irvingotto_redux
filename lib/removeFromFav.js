
export const removeFromFav = async (itemID) => {
    try {
      const response = await fetch(`/api/removefavorite/${itemID}`, {
        method: 'DELETE',
      });
  
    //   if (response.status === 200) {
    //     // Successfully removed from MongoDB, now update Redux store
    //     dispatch(favouritesActions.removeFavsFromFavouritesCart(itemID));
    //   } else {
    //     // Handle errors or show a message to the user
    //   }
    } catch (error) {
      console.error('Error while removing favorite:', error);
    }
  };