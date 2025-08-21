

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Heart, Instagram, Mail, Send, Sparkles, Truck, Tag, Eye, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { allProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CountdownTimer } from '@/components/countdown-timer';
import { cn } from '@/lib/utils';
import Ribbons from '@/components/ribbons';

const heroSlides = [
  {
    image: { src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', alt: 'Stylish model wearing a flowing dress', hint: 'stylish model fashion' },
    content: {
      eyebrow: 'New Arrivals',
      title: 'Discover Your Style',
      description: 'Explore our latest women’s, men’s & kids collections. Affordable, stylish clothing for every occasion.',
      cta: 'Shop The Collection',
      href: '/shop/all',
      bgColor: 'bg-pink-100',
    }
  },
  {
    image: { src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg', alt: 'Man posing in a street style outfit', hint: 'man street style' },
    content: {
        eyebrow: "Men's Collection",
        title: 'Sharp, Modern, Confident',
        description: 'Upgrade your wardrobe with our versatile collection of menswear, designed for the modern man.',
        cta: 'Explore Menswear',
        href: '/shop/men',
        bgColor: 'bg-blue-100',
    }
  },
  {
    image: { src: 'https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg', alt: 'Woman in a casual outfit looking stylish', hint: 'woman casual outfit' },
    content: {
        eyebrow: 'Summer Sale',
        title: 'Up to 40% Off',
        description: "Don't miss out on our seasonal sale. Get the best styles at unbeatable prices while they last.",
        cta: 'View Sale Items',
        href: '/shop/all',
        bgColor: 'bg-green-100',
    }
  },
  {
    image: { src: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg', alt: 'Woman wearing an elegant dress for an evening out', hint: 'woman elegant dress' },
    content: {
        eyebrow: 'Timeless Elegance',
        title: 'For Every Occasion',
        description: 'From casual days to elegant nights, find the perfect outfit that makes you shine.',
        cta: 'Discover More',
        href: '/shop/women',
        bgColor: 'bg-purple-100',
    }
  }
];

const featuredCategories = [
  { name: 'Dresses', description: 'Ethically crafted, effortlessly beautiful.', href: '/shop/women', image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg' },
  { name: 'Trousers', description: 'Versatility meets comfort.', href: '/shop/women', image: 'https://images.pexels.com/photos/18245839/pexels-photo-18245839/free-photo-of-woman-in-a-black-abaya-and-a-hijab.jpeg' },
  { name: 'Knitwear', description: 'Artisan warmth, handcrafted coziness.', href: '/shop/women', image: 'https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg' },
  { name: 'Jumpsuits', description: 'Style and comfort in a leap.', href: '/shop/women', image: 'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png' },
  { name: 'Jackets', description: 'Responsible fashion, reliable warmth.', href: '/shop/men', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  { name: 'Tops', description: 'Everyday elegance, responsibly made.', href: '/shop/women', image: 'https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg' },
  { name: 'Skirts', description: 'Swirl in sustainable chic.', href: '/shop/women', image: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg' },
  { name: 'Bags', description: 'Stylish bags for work and beyond.', href: '/shop/all', image: 'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg' },
];


const bestSellers = allProducts.slice(0, 8);
const newArrivals = allProducts.slice(4, 10);
const comfyClassics = allProducts.slice(1, 5);

const testimonials = [
  {
    name: 'Aisha K.',
    avatar: 'https://images.pexels.com/photos/4612083/pexels-photo-4612083.png',
    rating: 5,
    quote: "The quality of the Abayas is exceptional, and the prices are so reasonable. I've already ordered twice!",
  },
  {
    name: 'Mohammed A.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    rating: 5,
    quote: "Finding stylish and modest clothing for men has never been easier. Easy Mall is my new favorite store.",
  },
  {
    name: 'Fatima Z.',
    avatar: 'https://images.pexels.com/photos/3760859/pexels-photo-3760859.png',
    rating: 4,
    quote: "I bought a dress for Eid, and it was perfect. Fast shipping and great customer service. Will shop again.",
  },
   {
    name: 'Omar H.',
    avatar: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg',
    rating: 5,
    quote: "Impressive collection and user-friendly website. The AI recommender helped me find exactly what I was looking for.",
  },
];

const instagramPosts = [
  { image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980', width: 400, height: 400 },
  { image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e', width: 400, height: 400 },
  { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b', width: 400, height: 400 },
  { image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg', width: 400, height: 400 },
  { image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', width: 400, height: 400 },
  { image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21', width: 400, height: 400 },
];

export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoplayPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen -mt-20">
        <Carousel setApi={setApi} className="w-full h-full" plugins={[autoplayPlugin.current]}>
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={slide.image.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-2xl mx-auto">
                 {heroSlides.map((slide, index) => (
                    <div key={index} className={cn("space-y-4 transform transition-all duration-500", selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden')}>
                      <p className="font-semibold uppercase tracking-wider">{slide.content.eyebrow}</p>
                      <h1 className="font-headline text-5xl md:text-7xl font-bold">{slide.content.title}</h1>
                      <p className="text-lg md:text-xl max-w-md mx-auto">{slide.content.description}</p>
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                        <Link href={slide.content.href}>{slide.content.cta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                      </Button>
                    </div>
                ))}
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-3 w-3 rounded-full transition-all',
                index === selectedIndex ? 'w-6 bg-white' : 'bg-white/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Featured Categories Grid */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link href={category.href} key={category.name} className="group">
                <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-0 flex items-center">
                    <div className="relative w-2/5 aspect-[3/4]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 10vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={category.name.toLowerCase()}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 w-3/5">
                      <h3 className="font-headline text-lg font-semibold text-primary">{category.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comfy Classics Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-lg overflow-hidden min-h-[70vh]">
                    <Image
                        src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
                        alt="Comfy Classics"
                        fill
                        className="object-cover"
                        data-ai-hint="stylish woman model"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 h-full items-center p-8 md:p-12 min-h-[70vh]">
                        <div className="flex flex-col items-start text-left">
                            <p className="text-sm uppercase tracking-widest text-white/80">New Must-Haves for Your Routine</p>
                            <h2 className="font-headline text-5xl md:text-6xl font-bold text-white mt-4">Comfy Classics</h2>
                            <Button variant="secondary" size="lg" className="mt-8" asChild>
                              <Link href="/shop/all">Go To Collection</Link>
                            </Button>
                        </div>
                        <div className="max-h-[600px] overflow-hidden">
                             <Carousel
                              opts={{ align: 'start', loop: true }}
                              className="w-full"
                            >
                              <CarouselContent className="-ml-2">
                                {comfyClassics.map((product) => (
                                  <CarouselItem key={product.id} className="basis-1/2 pl-2">
                                      <ProductCard product={product} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* New Promotional Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/shop/all" className="group relative rounded-lg overflow-hidden min-h-[500px] flex items-end p-8 text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-headline text-3xl font-bold">Up To 60% Off On Leather Bags</h3>
                <div className="mt-4 flex items-center gap-2 font-semibold group-hover:underline">
                  Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/shop/women" className="group relative rounded-lg overflow-hidden min-h-[500px] flex items-end p-8 text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-headline text-3xl font-bold">40% Off On Knitwear & Jackets</h3>
                <div className="mt-4 flex items-center gap-2 font-semibold group-hover:underline">
                  Shop Jackets <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Fresh Arrivals Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 h-full">
            <div className="relative rounded-lg overflow-hidden h-[600px] lg:h-auto">
                <Image
                    src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg"
                    alt="Fresh Arrivals"
                    fill
                    className="object-cover"
                    data-ai-hint="stylish woman model"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-8">
                    <p className="text-sm uppercase tracking-widest text-white/80">New Must-Haves for Your Routine</p>
                    <h2 className="font-headline text-5xl md:text-6xl font-bold text-white mt-4">Fresh Arrivals</h2>
                    <Button variant="secondary" size="lg" className="mt-8" asChild>
                      <Link href="/shop/all">View Collection</Link>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col justify-center max-h-[600px] lg:max-h-full">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2 text-center lg:text-left">Best Sellers</h2>
                <p className="text-center lg:text-left text-muted-foreground mb-8">Discover our most loved products</p>
                <ScrollArea className="flex-1 pr-4 -mr-4">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} layout="horizontal" />
                      ))}
                  </div>
                </ScrollArea>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Countdown Banner Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative h-[60vh] w-full rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7262995/pexels-photo-7262995.jpeg"
              alt="Promotional banner for a scent discovery set"
              fill
              className="object-cover"
              data-ai-hint="cosmetic product hands"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-8 md:p-16 text-white">
              <div className="max-w-md text-center md:text-left">
                <p className="text-sm uppercase tracking-widest">Don't Miss Out!</p>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">Discover your new favorite scent</h2>
                <p className="mt-4 text-white/90">
                  Try all our best-selling scents with the Mini Discovery Set - perfect for sampling or travel. On sale now until the timer runs out.
                </p>
                <Button size="lg" variant="secondary" className="mt-6" asChild>
                  <Link href="/shop/all">Shop Now</Link>
                </Button>
              </div>
              <div className="mt-8 md:mt-0">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. New Arrivals Carousel */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-2">New Arrivals</h2>
          <p className="text-center text-muted-foreground mb-12">Check out the latest additions to our collection</p>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-12">What Our Customers Say</h2>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="h-full flex flex-col justify-center p-6 text-center shadow-md">
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gray-300" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic flex-1">&quot;{testimonial.quote}&quot;</p>
                      <h4 className="font-headline font-semibold mt-4">{testimonial.name}</h4>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
          </Carousel>
        </div>
      </section>
      
      {/* 9. Instagram Feed */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <a href="#" className="text-primary hover:underline">
            <h2 className="font-headline text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <Instagram className="h-8 w-8" /> Follow us on Instagram
            </h2>
          </a>
          <p className="text-muted-foreground mt-2 mb-8">@easymall</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {instagramPosts.map((post, index) => (
              <Link href="#" key={index} className="group block overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  width={post.width}
                  height={post.height}
                  className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">Tag us for a chance to be featured!</p>
        </div>
      </section>

      {/* 10. Newsletter Signup */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-3xl font-bold text-primary">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">Get exclusive offers, updates on new arrivals, and style tips delivered directly to your inbox.</p>
          <form className="flex max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow rounded-r-none focus:z-10 text-base"
              aria-label="Email Address"
            />
            <Button type="submit" className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">
              <span className="hidden sm:inline">Join Now</span>
              <Send className="sm:hidden" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

    

    