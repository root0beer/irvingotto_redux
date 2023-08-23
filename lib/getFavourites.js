export const submitFavourites = async (obj) => {
    try {
        const result = await fetch("/api/favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        return result.json();
    } catch (error) {
        console.log(error, "Error!!!!");
    }
};