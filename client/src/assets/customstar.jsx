import React from 'react';

export default function CustomStar({ fillPercentage }) {
  return (
    <svg
      width="96"
      height="91"
      viewBox="0 0 96 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z"
        fill={`url(#paint0_linear_${fillPercentage})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${fillPercentage}`}
          x1="48"
          y1="0"
          x2="48"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" offset={`${100 - fillPercentage}%`} />
          <stop stopColor="black" offset="100%" />
        </linearGradient>
      </defs>
    </svg>
  );
}
