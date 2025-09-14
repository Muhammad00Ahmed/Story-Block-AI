import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Story Smart AI - AI-Powered Content Management',
  description: 'AI-powered content management system for Storyblok with generation, accessibility, translation, and SEO features.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}