import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  className?: string;
}

// Gray minimal line-style HackerRank logo
export default function HackerRankLogo({
  size = 48,
  title = "HackerRank",
  className = "",
  ...rest
}: Props) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={resolvedSize}
      height={resolvedSize}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {/* Hexagon outline */}
      <polygon points="256,16 480,128 480,384 256,496 32,384 32,128" fill="none" />
      {/* H letter with arrows */}
      <path d="M192 144v224" />
      <path d="M320 144v224" />
      <path d="M192 256h128" />
      <path d="M192 144l-24 24 24-24 24 24" />
      <path d="M320 368l-24-24 24 24 24-24" />
    </svg>
  );
}