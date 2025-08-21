"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AllProductsClient() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const products = useMemo(() => {
    if (!searchQuery) {
      return allProducts;
    }
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          {searchQuery ? (
            <>
              <h2 className="font-headline text-3xl font-bold">Search Results</h2>
              <p className="text-muted-foreground mt-1">
                Showing results for: <span className="font-semibold text-primary">"{searchQuery}"</span>
              </p>
            </>
          ) : (
            <div>
              <h2 className="font-headline text-3xl font-bold">Our Collection</h2>
              <p className="text-muted-foreground mt-1">Browse our entire collection below.</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-4 self-end sm:self-center">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[160px] sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <main className="flex-1">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold">No Products Found</h2>
            <p className="text-muted-foreground mt-2">Try a different search term or check back soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
