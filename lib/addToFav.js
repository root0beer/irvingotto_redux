export const addToFav = async (obj) => {
    const res = await fetch("/api/favfinal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return res.json();
  };
  