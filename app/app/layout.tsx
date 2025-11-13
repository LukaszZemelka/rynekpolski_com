import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = {
  title: 'RynekPolski.com - Business Intelligence Dashboard',
  description: 'Customizable business intelligence dashboard for Polish market',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[var(--bg-primary)]">
        <header className="sticky top-0 z-50 bg-black border-b-2 border-[var(--border-color)] shadow-lg shadow-black/20">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="RynekPolski.com Logo" 
                width={80} 
                height={46}
                className="h-10 w-auto"
                priority
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[var(--text-secondary)]">Demo User</span>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
