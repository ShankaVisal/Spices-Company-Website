import { SVGProps } from "react";

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M16 8.5c-2.76-1.38-5-3.5-5-6.5v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V6c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3h-1.5" />
    </svg>
  );
}
