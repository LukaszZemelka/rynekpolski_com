import type { Metadata } from 'next';
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
        <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-base font-bold text-white">RynekPolski.com</h1>
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
