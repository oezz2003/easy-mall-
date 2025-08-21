
'use client';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X, Minus, Plus, LogIn, Home, Store, Info, Phone, Shirt, PersonStanding, Baby, Layers, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import Image from 'next/image';
import { getSession } from '@/lib/session';
import { logoutAction, searchAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { useShop } from '@/context/shop-context';
import { allProducts } from '@/lib/products';
import { ProductCard } from './product-card';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/hooks/use-scrolled';

const searchCategories = [
    { name: 'Women', href: '/shop/women' },
    { name: 'Men', href: '/shop/men' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'New Arrivals', href: '/shop/all' },
    { name: 'Best Sellers', href: '/shop/all' },
];

const trendingProducts = allProducts.slice(0, 4);

type Session = {
  user: {
    name: string;
    email: string;
  }
} | null;

export function Header() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
  const [session, setSession] = useState<Session>(null);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useScrolled();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData as Session);
    };
    fetchSession();
  }, []);

  const isLoggedIn = !!session?.user;
  
  const isHomePage = pathname === '/';

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const collectionLinks = [
      { href: '/shop/women', label: 'Women', icon: <PersonStanding className="h-4 w-4 mr-2" /> },
      { href: '/shop/men', label: 'Men', icon: <Shirt className="h-4 w-4 mr-2" /> },
      { href: '/shop/kids', label: 'Kids', icon: <Baby className="h-4 w-4 mr-2" /> },
      { href: '/shop/all', label: 'All Products', icon: <Package className="h-4 w-4 mr-2" /> },
  ];

  const allMobileNavLinks = [
    { href: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { href: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
    { href: '/contact', label: 'Contact', icon: <Phone className="h-4 w-4" /> },
    ...collectionLinks,
  ];

  const isShopPage = pathname.startsWith('/shop');

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isHomePage && !isScrolled ? "text-white" : "text-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg"
    )}>
       <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M6 18h2.5"/><path d="M18.5 6H20v12H4V6h1.5"/><path d="m5 6 2.5-4h9L19 6"/><path d="M12 18V6"/></svg>
          <span className="font-headline text-2xl font-bold">Easy Mall</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {mainNavLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" className={cn(isHomePage && !isScrolled ? "hover:bg-white/10" : "", pathname === link.href ? "font-bold" : "")}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn("flex items-center gap-2", isHomePage && !isScrolled ? "hover:bg-white/10" : "", isShopPage ? "font-bold" : "")}>
                Shop
                <Store className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {collectionLinks.map((link) => (
                 <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className={cn("flex items-center", pathname === link.href ? "font-bold" : "")}>
                    {link.icon}
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <Dialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isHomePage && !isScrolled ? "hover:bg-white/10" : "")}>
                <Search />
                <span className="sr-only">Search</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 sm:max-w-2xl max-h-[90vh] flex flex-col">
              <DialogHeader className="p-4 border-b">
                 <DialogTitle className="sr-only">Search Products</DialogTitle>
                 <form action={(formData) => {
                    searchAction(formData);
                    setSearchDialogOpen(false);
                 }}>
                    <div className="flex items-center space-x-2">
                      <Search className="h-6 w-6 text-muted-foreground" />
                      <Input
                        id="search"
                        name="query"
                        type="search"
                        placeholder="Search for jackets, trousers..."
                        className="flex-1 border-none shadow-none focus-visible:ring-0 text-lg"
                        autoFocus
                      />
                    </div>
                  </form>
              </DialogHeader>
              <div className="p-6 overflow-y-auto">
                <div className="mb-8">
                  <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Top Categories</h3>
                  <div className="flex flex-wrap gap-3">
                    {searchCategories.map(category => (
                        <Button key={category.name} variant="outline" asChild onClick={() => setSearchDialogOpen(false)}>
                            <Link href={category.href}>{category.name}</Link>
                        </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Trending Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingProducts.map(product => (
                        <div key={product.id} onClick={() => setSearchDialogOpen(false)}>
                          <ProductCard product={product}/>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("relative", isHomePage && !isScrolled ? "hover:bg-white/10" : "")}>
                <ShoppingCart />
                {cart.length > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 justify-center rounded-full p-0 text-xs">{cart.reduce((acc, item) => acc + item.quantity, 0)}</Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pl-0 sm:max-w-lg">
              <SheetHeader className="px-6">
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto">
                {cart.length > 0 ? (
                  <div className="divide-y divide-border">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                        <Image src={item.image} alt={item.name} data-ai-hint={item.hint || ''} width={80} height={80} className="rounded-md object-cover" loading="lazy" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                            <span>{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart className="w-16 h-16 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Your cart is empty</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Add items to your cart to get started.</p>
                  </div>
                )}
              </div>
              <SheetFooter className="p-6 pt-4 mt-auto border-t">
                  <div className="w-full space-y-4">
                      <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <Button className="w-full" size="lg" disabled={cart.length === 0}>Checkout</Button>
                  </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("hidden md:inline-flex", isHomePage && !isScrolled ? "hover:bg-white/10" : "")}>
                  <User />
                  <span className="sr-only">User Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action={logoutAction} className="w-full">
                    <button type="submit" className="w-full text-left">
                      Logout
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" className={cn("hidden md:flex items-center gap-2", isHomePage && !isScrolled ? "hover:bg-white/10" : "")}>
              <Link href="/login">
                Login
                <LogIn className="h-4 w-4" />
              </Link>
            </Button>
          )}

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold px-2" onClick={() => setMobileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M6 18h2.5"/><path d="M18.5 6H20v12H4V6h1.5"/><path d="m5 6 2.5-4h9L19 6"/><path d="M12 18V6"/></svg>
                  Easy Mall
                </Link>
                <div className="flex items-center justify-around mt-4">
                    {isLoggedIn ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="flex items-center gap-2"><User/>My Account</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => setMobileMenuOpen(false)}>Profile</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setMobileMenuOpen(false)}>Orders</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setMobileMenuOpen(false)}>Settings</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <form action={logoutAction} className="w-full">
                              <button type="submit" className="w-full text-left" onClick={() => setMobileMenuOpen(false)}>
                                Logout
                              </button>
                            </form>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button asChild variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                        <Link href="/login" className="flex items-center gap-2">
                          <LogIn />
                          Login
                        </Link>
                      </Button>
                    )}
                </div>
                <Separator className="my-2" />
                <nav className="grid gap-2">
                  {allMobileNavLinks.map((link) => (
                    <Button key={link.href} asChild variant={pathname === link.href ? "secondary" : "ghost"} className="justify-start" onClick={() => setMobileMenuOpen(false)}>
                       <Link href={link.href} className="flex items-center gap-2">
                         {link.icon}
                         {link.label}
                       </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
