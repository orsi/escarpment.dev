"use client";

import styles from "./logo.module.css";

export default function Logo() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 520 200"
        className={styles.logo}
      >
        <defs>
          <mask id="cap">
            <rect x="0" y="0" height="195" width="520" fill="white" />
          </mask>
        </defs>
        <path
          mask="url(#cap)"
          className={styles.path}
          stroke="currentColor"
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
      <h1 className={styles.heading}>
        <div className={`${styles.label} ${styles.primary}`}>ESCARPMENT</div>
        <div className={`${styles.label} ${styles.secondary}`}>
          DEVELOPMENTS
        </div>
      </h1>
    </>
  );
}
