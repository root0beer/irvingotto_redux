export const addToFav = async (obj) => {
    const res = await fetch("/api/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return res.json();
  };
  