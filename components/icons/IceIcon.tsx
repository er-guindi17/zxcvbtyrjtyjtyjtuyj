import React from 'react';

const IceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"></path>
      <path d="M3 7l9 5 9-5"></path>
      <path d="M12 12v10"></path>
      <path d="m10.2 12-8.4 4.6"></path>
      <path d="m13.8 12 8.4 4.6"></path>
    </svg>
);

export default IceIcon;
