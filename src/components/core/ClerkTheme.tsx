'use client';
import { updateClerkOptions } from '@clerk/astro/client';
import { dark } from '@clerk/themes';
import { useEffect } from 'react';

export function ClerkTheme() {
  useEffect(() => {
    // Function to update Clerk appearance based on media query
    const updateTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      updateClerkOptions({
        appearance: {
          baseTheme: isDark ? dark : undefined,
        },
      });
    };

    // Initial theme sync
    updateTheme();

    // Create media query listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the media query
    const handleChange = (e: any) => {
      updateClerkOptions({
        appearance: {
          baseTheme: e.matches ? dark : undefined,
        },
      });
    };

    // Add listener (using addEventListener for modern browsers)
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // No UI needed, this is automatic.
  return null;
}
