import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  className?: string;
}

// Gray minimal line-style LeetCode logo to match LinkedIn & GitHub style, slightly larger stroke
export default function LeetCodeLogo({
  size = 36,
  title = "LeetCode",
  className = "",
  ...rest
}: Props) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={resolvedSize}
      height={resolvedSize}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      stroke="#9CA3AF"
      strokeWidth="80"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M400 720L240 560L520 280L640 400" />
      <path d="M520 560H800" />
    </svg>
  );
}
