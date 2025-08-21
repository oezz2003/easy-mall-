
import Image from 'next/image';
import { Lightbulb, Target, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AiRecommender } from '@/components/ai-recommender';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            About Easy Mall
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            We're not just a store; we are a community passionate about style, quality, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-96 w-full">
            <Image
              src="https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg"
              alt="Diverse group of people smiling"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
              data-ai-hint="diverse people shopping"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, Easy Mall was born from a simple yet powerful idea: to make online shopping a truly seamless and enjoyable experience. We saw a world of cluttered online marketplaces and felt a calling to create a curated space where quality meets affordability.
            </p>
            <p className="mt-4 text-muted-foreground">
              Starting as a small, passionate team, we've grown into a trusted destination for fashion lovers and tech enthusiasts alike. Our journey is one of constant evolution, driven by our commitment to our customers and our love for what we do.
            </p>
          </div>
        </div>

        <div className="text-center mb-24">
            <h2 className="font-headline text-3xl font-bold">Our Core Values</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold">Customer First</h3>
                    <p className="text-muted-foreground mt-2">Our customers are at the heart of everything. We strive to exceed expectations with every interaction.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold">Innovate & Inspire</h3>
                    <p className="text-muted-foreground mt-2">We embrace technology and creativity to continuously improve and inspire our community.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                        <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold">Quality with Integrity</h3>
                    <p className="text-muted-foreground mt-2">We are committed to offering high-quality products and operating our business with honesty and transparency.</p>
                </div>
            </div>
        </div>
        
        <Separator className="my-16 md:my-24" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">Crafted with Care, Worn with Confidence</h2>
            <p className="mt-4 text-muted-foreground">
              Every piece in our collection is a testament to our commitment to quality. We partner with skilled artisans and ethical factories to ensure that every garment is not only beautiful but also responsibly made. We believe in fashion that feels good, inside and out.
            </p>
            <p className="mt-4 text-muted-foreground">
              From the initial design sketch to the final stitch, we pay meticulous attention to detail. Our materials are chosen for their durability, comfort, and environmental footprint, so you can feel confident in your purchase for years to come.
            </p>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg"
              alt="Fashion designer sketching"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
              data-ai-hint="fashion designer sketching"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
