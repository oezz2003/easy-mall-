import Image from 'next/image';
import { Suspense } from 'react';
import AllProductsClient from './AllProductsClient';

export default function AllProductsPage() {
  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-background">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg"
            alt="All products"
            fill
            className="object-cover"
            priority
            data-ai-hint="shopping bags sale"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">All Products</h1>
        </div>
      </section>
      <Suspense fallback={<div className="py-16 text-center">Loading products...</div>}>
        <AllProductsClient />
      </Suspense>
    </>
  );
}
