export const submitFavourite = async (fav) => {
    try {
        const resultFav = await fetch("/api/favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fav),
        });
        return resultFav.json();
    } catch (error) {
        console.log(error, "ERROR");
    }
};