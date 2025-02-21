import { getWixClient } from "@/lib/wix-client.base";

export async function getCart() {
  try {
    const wixClient = getWixClient();
    return await wixClient.currentCart.getCurrentCart();
  } catch (error) {
    if (
      (error as { details?: { applicationError?: { code: string | number } } })?.details?.applicationError?.code === "OWNED_CART_NOT_FOUND" ||
      (error as { details?: { applicationError?: { code: string | number } } })?.details?.applicationError?.code === 428
    ) {
      return null;
    }
    console.error('Cart fetch error:', error);
    return null;
    }
  }