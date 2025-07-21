'use client';

import { Button } from '@/components/ui/button';
import { useApp } from '@/hooks/use-app';

export function LanguageToggle() {
  const { language, setLanguage } = useApp();

  return (
    <div className="flex items-center gap-1 rounded-full border p-1">
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        className="rounded-full px-4"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'si' ? 'secondary' : 'ghost'}
        size="sm"
        className="rounded-full px-4"
        onClick={() => setLanguage('si')}
      >
        සිං
      </Button>
    </div>
  );
}
