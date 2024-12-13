// Author: Salome Schmied

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tripmate',
  description: 'Plan your next trip with Tripmate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
