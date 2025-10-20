import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.5 3.5 0 0 0 8.5 4a3.5 3.5 0 0 0-3.2 2.3c-.4-.2-.8-.3-1.3-.3-1.7 0-3 1.3-3 3s1.3 3 3 3h13c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1.5a3.5 3.5 0 0 0-3.3-2.3c-.6 0-1.2.2-1.7.5-.6-1.1-1.8-1.7-3-1.7Z"/>
        <path d="m12 12-2 4h4l-2 4"/>
    </svg>
);

export default LogoIcon;
