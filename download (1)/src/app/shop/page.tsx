import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    name: 'Women',
    description: 'Discover the latest in women\'s fashion, from elegant dresses to casual wear.',
    href: '/shop/women',
    image: 'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png',
    hint: 'stylish woman fashion',
  },
  {
    name: 'Men',
    description: 'Explore sharp and stylish menswear for every occasion.',
    href: '/shop/men',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    hint: 'stylish man fashion',
  },
  {
    name: 'Kids',
    description: 'Fun and playful styles for the little ones in your life.',
    href: '/shop/kids',
    image: 'https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg',
    hint: 'happy child fashion',
  },
   {
    name: 'All Products',
    description: 'Browse our entire catalog of products for everyone.',
    href: '/shop/all',
    image: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg',
    hint: 'shopping bags sale',
  },
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Our Collections
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our curated collections and find the perfect style for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <div key={collection.name} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={collection.image}
              alt={`A promotional image for the ${collection.name} collection`}
              width={800}
              height={600}
              data-ai-hint={collection.hint}
              className="object-cover w-full h-96 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-8 flex flex-col justify-end">
              <h2 className="font-headline text-3xl font-bold text-white">{collection.name}</h2>
              <p className="text-white/90 mt-2 max-w-md">{collection.description}</p>
              <Button asChild className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={collection.href}>
                  Shop {collection.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
