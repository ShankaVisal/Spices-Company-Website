
'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Gift, Sparkles, Star } from 'lucide-react';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '+94753177570';

const segments = [
  { text: '10% OFF', color: '#FFD700', probability: 0.2 },
  { text: 'Try Again', color: '#E0E0E0', probability: 0.3 },
  { text: '20% OFF', color: '#FFAC1C', probability: 0.1 },
  { text: 'Try Again', color: '#E0E0E0', probability: 0.2 },
  { text: 'Gift Voucher', color: '#DA70D6', probability: 0.05 },
  { text: 'Try Again', color: '#E0E0E0', probability: 0.1 },
  { text: 'Full Pack!', color: '#32CD32', probability: 0.05 },
  { text: 'Try Again', color: '#E0E0E0', probability: 0.1 },
];

const totalProbability = segments.reduce((acc, seg) => acc + seg.probability, 0);
if (totalProbability !== 1) {
  console.warn('Probabilities do not add up to 1. They add up to:', totalProbability);
}

export function SpinWheelGame() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const getResult = () => {
    let rand = Math.random();
    let cumulativeProb = 0;
    for (let i = 0; i < segments.length; i++) {
      cumulativeProb += segments[i].probability;
      if (rand < cumulativeProb) {
        return i;
      }
    }
    return segments.length - 1; // Fallback
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);

    const winningSegmentIndex = getResult();
    const segmentAngle = 360 / segments.length;
    const randomOffset = (Math.random() - 0.5) * segmentAngle * 0.8;
    const baseRotation = 360 * 5; // 5 full spins
    const targetRotation = baseRotation - (winningSegmentIndex * segmentAngle + randomOffset);
    
    setRotation(prev => prev + targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSpinResult(winningSegmentIndex);
      setShowResult(true);
    }, 6000); // Corresponds to animation duration
  };

  const downloadScreenshot = async () => {
    if (resultRef.current) {
        const canvas = await html2canvas(resultRef.current, { backgroundColor: null });
        const link = document.createElement('a');
        link.download = 'devi-products-promo-win.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
  };

  const claimOnWhatsApp = () => {
    const prizeText = spinResult !== null ? segments[spinResult].text : '';
    const message = `Hello Devi Products! I won a prize from your spin wheel game: *${prizeText}*! How can I claim it?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const isWinner = spinResult !== null && segments[spinResult].text !== 'Try Again';

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
          Spin & Win Big!
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mb-8">
          Try your luck with our promotional spin wheel game. You could win amazing discounts, gift vouchers, or even a full product pack!
        </p>
        <div className="relative flex flex-col items-center">
          <div className="absolute top-[-15px] z-10" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }}>
             <svg width="40" height="50" viewBox="0 0 30 40" fill="hsl(var(--primary))" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 40C23.2843 40 30 28.2843 30 20C30 11.7157 23.2843 0 15 0C6.71573 0 0 11.7157 0 20C0 28.2843 6.71573 40 15 40Z" />
                <path d="M15 40L0 20H30L15 40Z" />
             </svg>
          </div>
          <div
            ref={wheelRef}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-primary shadow-2xl overflow-hidden transition-transform duration-[6000ms] ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((segment, i) => {
              const angle = 360 / segments.length;
              return (
                <div
                  key={i}
                  className="absolute w-1/2 h-full origin-right"
                  style={{
                    transform: `rotate(${i * angle}deg)`,
                    clipPath: `polygon(100% 0, 0 50%, 100% 100%)`,
                  }}
                >
                  <div
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${angle / 2}deg)`,
                      backgroundColor: segment.color,
                    }}
                  />
                  <div
                    className="absolute w-[55%] h-full flex items-center justify-end pr-2"
                    style={{
                      transform: 'translateX(80%) rotate(22.5deg)',
                      color: segment.text === 'Try Again' ? '#555' : '#fff',
                    }}
                  >
                    <span className="font-bold text-sm md:text-base -rotate-45 block w-20 text-center drop-shadow-md">
                        {segment.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Button onClick={handleSpin} disabled={isSpinning} size="lg" className="mt-8 px-10 py-6 text-lg font-bold">
            {isSpinning ? 'Spinning...' : 'SPIN NOW!'}
          </Button>
        </div>

        <Dialog open={showResult} onOpenChange={setShowResult}>
            <DialogContent>
                <div ref={resultRef} className="p-6 bg-card rounded-md">
                    <DialogHeader className="text-center items-center">
                    {isWinner ? (
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Gift className="h-12 w-12 text-primary" />
                        </div>
                    ) : (
                         <div className="mx-auto bg-muted p-4 rounded-full w-fit mb-4">
                            <Sparkles className="h-12 w-12 text-muted-foreground" />
                        </div>
                    )}
                    
                    <DialogTitle className={cn("font-headline text-3xl", isWinner ? "text-primary" : "text-muted-foreground")}>
                        {isWinner ? "Congratulations!" : "Better Luck Next Time!"}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                        You won: <span className="font-bold text-foreground">{spinResult !== null && segments[spinResult].text}</span>
                    </DialogDescription>
                    </DialogHeader>
                </div>
                {isWinner && (
                    <DialogFooter className="mt-4 sm:justify-center gap-2 flex-col sm:flex-col">
                        <p className="text-xs text-muted-foreground text-center mb-2">Download a screenshot of your win and send it to us on WhatsApp to claim your prize!</p>
                        <Button onClick={downloadScreenshot}>Download Screenshot</Button>
                        <Button onClick={claimOnWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
                            <WhatsAppIcon className="mr-2 h-5 w-5" />
                            Claim on WhatsApp
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
