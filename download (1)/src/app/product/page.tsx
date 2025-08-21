
'use client';
import { Suspense } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, Heart, Share2, Twitter, Facebook, Link as LinkIcon, ShieldCheck, Gem, Leaf, ChevronRight, CheckCircle2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ProductImageGallery } from '@/components/product-image-gallery';
import { useSearchParams } from 'next/navigation';
import { allProducts } from '@/lib/products';
import { useShop } from '@/context/shop-context';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { QuantitySelector } from '@/components/quantity-selector';

const productImages = [
  { src: 'https://placehold.co/600x600.png', alt: 'Denim jacket on model', hint: 'denim jacket model' },
  { src: 'https://placehold.co/601x601.png', alt: 'Denim jacket back', hint: 'denim jacket back' },
  { src: 'https://placehold.co/602x602.png', alt: 'Denim jacket side', hint: 'denim jacket side' },
  { src: 'https://placehold.co/603x603.png', alt: 'Denim jacket fabric texture', hint: 'denim fabric' },
];

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const { toast } = useToast();
  const [quantity, setQuantity] = React.useState(1);

  const product = allProducts.find(p => p.id === Number(productId)) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  const perfectFitProducts = allProducts.filter(p => {
    if (product.tags.includes('women')) {
        return [3, 4, 2].includes(p.id);
    }
    if (product.tags.includes('men')) {
        return [5, 7, 8].includes(p.id);
    }
    return [19, 21, 22].includes(p.id);
  }).slice(0, 3);


  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} is now in your shopping cart.`,
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been updated in your wishlist.`,
    });
  };


  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="inline-block h-4 w-4 mx-1" />
          <Link href={`/shop/all`} className="hover:text-primary">{product.category}</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <ProductImageGallery images={productImages} />
          </div>
          <div className="space-y-6 flex flex-col">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                 <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
                 <p className="text-xl text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>12 in stock</span>
              </div>
               <p className="text-muted-foreground leading-relaxed">Brighten up your summer style with this beautiful top. It features a bright, summery print on a vibrant background, ensuring that you stand out from the crowd. Make a statement with the perfect combination of style and colour.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Size</label>
                 <Select defaultValue="small">
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <label className="text-sm font-medium text-muted-foreground">Material</label>
                 <Select defaultValue="cotton">
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cotton">95% Cotton 5% Pol</SelectItem>
                    <SelectItem value="polyester">100% Polyester</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
               <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
               <Button size="lg" className="flex-1 w-full" onClick={handleAddToCart}>Add to Cart</Button>
            </div>
             <Button size="lg" variant="secondary" className="w-full">Buy It Now</Button>

            <div className="grid grid-cols-3 gap-4 text-center border-t border-b py-4">
                <div className="flex flex-col items-center gap-2">
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Versatility</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Durability</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Gem className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Elegance</span>
                </div>
            </div>

             <div className="bg-muted text-center p-3 rounded-md">
                <p className="font-semibold text-muted-foreground">Free Shipping on Orders Over $50!</p>
            </div>
           
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger>About</AccordionTrigger>
                <AccordionContent>This classic piece is designed for both style and comfort. Made from high-quality, breathable fabric, it's perfect for any occasion, from a casual day out to a more formal event. The timeless design ensures it will be a staple in your wardrobe for years to come.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-to-care">
                <AccordionTrigger>How To Care</AccordionTrigger>
                <AccordionContent>Machine wash cold with like colors. Do not bleach. Tumble dry low. Cool iron if needed. For best results, we recommend line drying to preserve the fabric's quality and color.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="materials">
                <AccordionTrigger>Materials</AccordionTrigger>
                <AccordionContent>Crafted from a premium blend of 95% organic cotton and 5% polyester for a slight stretch and added durability. All materials are ethically sourced from certified suppliers.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping-returns">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>We offer free standard shipping on all orders over $50. Expedited shipping options are available at checkout. We accept returns within 30 days of purchase for a full refund or exchange. Items must be in original condition with tags attached.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <Separator className="my-12" />

       <div className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Complete The Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfectFitProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>


      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
         <div className="grid md:grid-cols-2 gap-8">
            <Link href="/shop/all" className="group relative rounded-lg overflow-hidden min-h-[400px] flex items-end p-8 text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-headline text-3xl font-bold">A Curated Walkthrough Of Clothing Creations</h3>
              </div>
            </Link>
            <Link href="/shop/all" className="group relative rounded-lg overflow-hidden min-h-[400px] flex items-end p-8 text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-headline text-3xl font-bold">A Journey Through Elegance, Showcasing Classic To Contemporary</h3>
              </div>
            </Link>
          </div>
       </div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">You Might Also Like</h2>
         <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {relatedProducts.map((p) => (
                <CarouselItem key={p.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-1">
                    <ProductCard product={p} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          </Carousel>
      </div>

    </>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 md:px-6 py-12 text-center">Loading...</div>}>
      <ProductDetailContent />
    </Suspense>
  )
}
