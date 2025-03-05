import Link from 'next/link';
import styles from "./Footer.module.css";
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (

      <footer className={styles.footer}>

      <div className={styles.footerLeft}>
      <p className={styles.gradientText}>MultiChain: Marketplace, Launchpad, and Stakes<br/>Contact us: info@snft.pro</p>
      <p className={styles.gradientText}>SNFT © 2025 - all Rights Reserved</p>
      </div>

<div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Documents</h3>
<Link href="/" className={styles.gradientText} target="_blank" rel="noreferrer">
Link
</Link>
<Link href="/" className={styles.gradientText} target="_blank" rel="noreferrer">
Link
</Link>
<Link href="/" className={styles.gradientText} target="_blank" rel="noreferrer">
Link  
</Link>
</div>

<div className={styles.footerRight}>
<Link href="/" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/in.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>

          <Link href="/" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/tw.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>

          <Link href="/" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/gi.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>
          </div>

      </footer>

  );
}