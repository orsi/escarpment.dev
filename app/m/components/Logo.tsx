import { SVGProps } from "react";

export default function Logo(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 200"
      width="520"
      {...props}
    >
      <defs>
        <mask id="cap">
          <rect x="0" y="0" height="195" width="520" fill="white" />
        </mask>
      </defs>
      <path
        className="stroke-10 [stroke-dasharray:2000] [stroke-dashoffset:2000] animate-draw-in"
        mask="url(#cap)"
        stroke="currentColor"
        strokeWidth="20"
        fill="none"
        d="m20 200
            l 190 -190
            l 180 180
            l 50 0 
            l -180 -180 
            l -180 180 
            l 50 0 
            l 180 -180 
            l 190 190"
      />
    </svg>
  );
}
