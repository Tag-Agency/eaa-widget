import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axs Pro - Widget di Accessibilità EAA',
  description: 'Soluzione completa e gratuita per la conformità al European Accessibility Act (EAA). Widget facile da integrare per ogni sito web.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
