import { SVGProps } from "react";

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
        <circle cx="12" cy="12" r="10" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" />
        <path d="m9 12 2 2 4-4" stroke="hsl(var(--primary-foreground))" />
    </svg>
  );
}
