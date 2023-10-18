export const addToOrder = async (obj) => {
  const res = await fetch("/api/prodtesttwo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return res.json(); 
};