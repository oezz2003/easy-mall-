
'use client'
import { useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { allProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function MenShopPage() {
  const products = useMemo(() => {
    return allProducts.filter(p => p.tags.includes('men'));
  }, []);

  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-background">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
            alt="Men's Collection"
            fill
            className="object-cover"
            priority
            data-ai-hint="stylish man fashion"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">Men's Collection</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Collection</h2>
            <p className="text-muted-foreground mt-1">Explore sharp and stylish men's wear.</p>
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
              <p className="text-muted-foreground mt-2">Check back soon for new arrivals.</p>
            </div>
          )}
        </main>
      </div>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[400px]">
            <Image
              src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png"
              alt="Stylish woman"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="stylish woman fashion"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
              <h3 className="font-headline text-3xl font-bold">For Her</h3>
              <p className="mt-2 text-white/90">Explore our women's collection</p>
              <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/shop/women">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[400px]">
            <Image
              src="https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg"
              alt="Happy child"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="happy child fashion"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
              <h3 className="font-headline text-3xl font-bold">For The Little Ones</h3>
              <p className="mt-2 text-white/90">Discover our kids' collection</p>
              <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/shop/kids">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
