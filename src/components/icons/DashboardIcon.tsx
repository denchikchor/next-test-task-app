import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DashboardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function DashboardIcon({ className, size = 20, ...props }: DashboardIconProps) {
  return (
    <svg
      viewBox="0 0 20 19"
      width={size}
      height={size}
      fill="none"
      className={cn(className)}
      aria-hidden
      {...props}
    >
      <path
        d="M5.30007 8.69998C3.40007 8.69998 1.70007 7.09998 1.70007 5.09998C1.70007 3.09998 3.40007 1.59998 5.30007 1.59998C7.20007 1.59998 8.80007 3.19998 8.80007 5.09998C8.80007 7.09998 7.20007 8.69998 5.30007 8.69998Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.9001 18.3H3.6001C2.6001 18.3 1.6001 17.5 1.6001 16.5V13.2C1.6001 12.1 2.5001 11.3 3.6001 11.3H6.9001C7.9001 11.3 8.8001 12.1 8.8001 13.2V16.5C8.8001 17.4 7.9001 18.3 6.9001 18.3Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6001 18.3H13.3001C12.3001 18.3 11.4001 17.5 11.4001 16.4V3.49998C11.4001 2.49998 12.2001 1.59998 13.3001 1.59998H16.6001C17.6001 1.59998 18.5001 2.39998 18.5001 3.49998V16.4C18.5001 17.4 17.6001 18.3 16.6001 18.3Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
