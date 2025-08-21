import Link from "next/link";
import { Instagram, Facebook, Send, ArrowRight } from 'lucide-react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 px-4 py-16 md:px-6">
        
        <div className="lg:col-span-3 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M6 18h2.5"/><path d="M18.5 6H20v12H4V6h1.5"/><path d="m5 6 2.5-4h9L19 6"/><path d="M12 18V6"/></svg>
            <span className="font-headline text-3xl font-bold text-primary">Easy Mall</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">Your destination for affordable, stylish fashion for the whole family. Curated with love and an eye for quality.</p>
           <div className="flex gap-4 mt-2">
                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary"/></Link>
                <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary"/></Link>
                <Link href="#" aria-label="Telegram"><Send className="h-5 w-5 text-muted-foreground hover:text-primary"/></Link>
            </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <h4 className="font-headline font-semibold">Shop</h4>
          <Link href="/shop/women" className="text-sm text-muted-foreground hover:text-primary">Women</Link>
          <Link href="/shop/men" className="text-sm text-muted-foreground hover:text-primary">Men</Link>
          <Link href="/shop/kids" className="text-sm text-muted-foreground hover:text-primary">Kids</Link>
          <Link href="/shop/all" className="text-sm text-muted-foreground hover:text-primary">All Products</Link>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <h4 className="font-headline font-semibold">About</h4>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-headline font-semibold">Mailing list</h4>
            <p className="text-sm text-muted-foreground">Get exclusive updates and offers.</p>
            <form className="flex w-full">
                <Input type="email" placeholder="Email" className="rounded-r-none focus:z-10" />
                <Button type="submit" size="icon" className="rounded-l-none">
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </form>
        </div>

        <div className="lg:col-span-3 relative rounded-lg overflow-hidden flex items-center justify-center p-6 min-h-[150px] bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
          <div className="absolute inset-0 bg-black/50"></div>
           <div className="relative text-center text-white">
                <h4 className="font-headline font-semibold text-lg">Have something to sell?</h4>
                <p className="text-sm text-white/80 mt-1 mb-4">Join our community of sellers.</p>
                <Button variant="secondary" size="sm">Become a Seller</Button>
            </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4 md:px-6">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Easy Mall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
