import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EAA Widget Preview',
  description: 'Preview for Accessibility Widget',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
