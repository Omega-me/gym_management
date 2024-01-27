import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryProvider } from '@/common/providers';
import '../common/styles/globals.css';
import React from 'react';

import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gym Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ClientLayout>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
