import { updateClerkOptions } from '@clerk/astro/client';
import { dark } from '@clerk/themes';
import { useEffect } from 'react';

export function ClerkTheme() {
  useEffect(() => {
    // Function to update Clerk appearance based on Tailwind's dark mode
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      updateClerkOptions({
        appearance: {
          baseTheme: isDark ? dark : undefined,
        },
      });
    };

    // Initial theme sync
    updateTheme();

    // Listen for changes to the class attribute on <html>
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // No UI needed, this is automatic.
  return null;
}
