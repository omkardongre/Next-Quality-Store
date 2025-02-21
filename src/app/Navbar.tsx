import logo from "@/assets/logo.jpeg";
import { getWixClient } from "@/lib/wix-client.base";
import Image from "next/image";
import Link from "next/link";

async function getCart() {
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

export default async function Navbar() {
  const cart = await getCart();

  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="Next Quality logo" width={40} height={40} />
          <span className="text-xl font-bold">Next Quality</span>
        </Link>
        {/* Cart will be rendered with fresh data on every request */}
        <Link href="/cart" className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          {cart && <span>{totalQuantity} items</span>}
        </Link>
      </div>
    </header>
  );
}