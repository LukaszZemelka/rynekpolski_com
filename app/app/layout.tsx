import type { Metadata } from 'next';
import './globals.css';
import { DashboardProvider } from '@/contexts/DashboardContext';
import Header from '@/components/Header';

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
        <DashboardProvider>
          <Header />
          <main className="container mx-auto px-4 py-6">
            {children}
          </main>
        </DashboardProvider>
      </body>
    </html>
  );
}
