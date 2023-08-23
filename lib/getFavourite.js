export const submitFavourite = async (fav) => {
    const resultFav = await fetch("/api/favourites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    return resultFav.json();
};