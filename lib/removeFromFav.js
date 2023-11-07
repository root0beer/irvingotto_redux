
export const removeFromFav = async ({userId, itemID}) => {
    try {
      const response = await fetch(`/api/removefavorite/${itemID}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, itemID}),
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