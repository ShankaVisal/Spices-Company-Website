
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Twitter, Facebook, Linkedin, Copy, Share2 } from 'lucide-react';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const { toast } = useToast();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'Link Copied!',
      description: 'The link has been copied to your clipboard.',
    });
  };

  if (!url) {
    return null;
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  return (
    <Card className="mt-12">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Share2 className="h-6 w-6"/>
                Share this post
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="icon" asChild>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                        <WhatsAppIcon className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                        <Twitter className="h-5 w-5" />
                    </a>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                        <Facebook className="h-5 w-5" />
                    </a>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy link">
                    <Copy className="h-5 w-5" />
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}
