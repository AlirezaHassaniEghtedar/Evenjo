import { type SVGProps } from "react";

export function SolarUserRoundedLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4" />
        <ellipse cx="12" cy="17" rx="7" ry="4" />
      </g>
    </svg>
  );
}
export default SolarUserRoundedLinear;
