export const submitFavourites = async (obj) => {
    const result = await fetch("/api/favourites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    return result.json();
};