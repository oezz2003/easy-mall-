
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useShop } from '@/context/shop-context';

export function WelcomeScreen() {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { setIsLoading } = useShop();

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcomeScreen');

    if (!hasSeenWelcome) {
      setIsLoading(true);
      setShouldRender(true);
      
      const showTimer = setTimeout(() => {
        setShow(true);
      }, 100);

      const hideTimer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('hasSeenWelcomeScreen', 'true');
      }, 3000);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
        setIsLoading(false);
      }, 4000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(unmountTimer);
      };
    } else {
        setIsLoading(false);
    }
  }, [setIsLoading]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-accent transition-opacity duration-1000 ease-in-out',
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex items-center gap-4 text-white animate-fade-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16">
          <path d="M6 18h2.5"/><path d="M18.5 6H20v12H4V6h1.5"/><path d="m5 6 2.5-4h9L19 6"/><path d="M12 18V6"/>
        </svg>
        <div className="flex flex-col">
          <h1 className="font-headline text-5xl font-bold">Welcome to</h1>
          <h2 className="font-headline text-6xl font-bold">Easy Mall</h2>
        </div>
      </div>
      <p className="mt-4 text-lg text-primary-foreground/80 animate-fade-in-up animation-delay-300">
        Your friendly online shopping destination.
      </p>
    </div>
  );
}
