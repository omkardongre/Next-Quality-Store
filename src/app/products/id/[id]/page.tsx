import { getWixServerClient } from "@/lib/wix-client.server";
import { getProductById } from "@/wix-api/products";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;

  if (id === "someId") {
    redirect(`/products/i-m-a-product-1?${new URLSearchParams(resolvedSearchParams)}`);
  }

  const product = await getProductById(await getWixServerClient(), id);

  if (!product) notFound();

  redirect(`/products/${product.slug}?${new URLSearchParams(resolvedSearchParams)}`);
}
