export const submitFavourite = async (fav) => {
    const result = await fetch("/api/favourites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fav),
    });
    return result.json();
};