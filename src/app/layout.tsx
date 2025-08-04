
import type { Metadata } from 'next';
import { AppProvider } from '@/context/app-provider';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deviproducts.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Devi Products - The pure taste of the Down South...',
    template: '%s | Devi Products',
  },
  description: 'Discover the authentic taste of Sri Lanka with Devi Products. We offer premium, ethically sourced spices like Ceylon cinnamon, Black pepper, and Garcinia.',
  keywords: ['Sri Lankan spices', 'Ceylon cinnamon', 'black pepper', 'goraka', 'Garcinia', 'authentic spices', 'Devi Products', 'Devi', 'kulubadu', 'Gampaha', 'Sri Lanka', ],
  openGraph: {
    title: 'Devi Products - The pure taste of the Down South.',
    description: 'Premium, ethically sourced spices from Sri Lanka. Explore our collection of Ceylon cinnamon, black pepper, and more.',
    url: siteUrl,
    siteName: 'Devi Products',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devi Products - The pure taste of the Down South.',
    description: 'Discover the authentic taste of Sri Lanka with Devi Products. Premium spices like Ceylon cinnamon and black pepper.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devi Products",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-75-317-7570",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/deviproducts",
      "https://www.twitter.com/deviproducts",
      "https://www.instagram.com/deviproducts"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "Devi Products",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="font-body antialiased">
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
        <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="6890f6548f9f365978081c61" async></script>
      </body>
    </html>
  );
}
