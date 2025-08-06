const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendCartToBackend = async (cartItems, accessToken) => {
  const itemsToSend = cartItems.map((item) => ({
    name: item.name,
    price: item.price,
  }));

  // Calculate total price
  const totalPrice = itemsToSend.reduce((sum, item) => sum + item.price, 0);

  const response = await fetch(`${API_BASE_URL}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ cartItems: itemsToSend }),
  });

  if (!response.ok) {
    throw new Error("Failed to send cart to backend");
  }

  return response.json();
};
// --- End CartApi code ---