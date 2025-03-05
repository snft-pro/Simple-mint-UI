"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Conbutton } from "../Connect/Connect";
export default function Navbar() {
  return (
  <div className={styles.nav}>

  <div className={styles.navLeft}>
      <Link href="/" className={`${styles.homeLink} ${styles.footerLeft}`}>
        <Image 
        src="/logo.png"
        width={100}
        height={40}
        alt="SNFT" 
        />  
       </Link>

      <a  className={styles.gradientText} href="/">Home</a> 
      <a className={styles.gradientText} href="/" target="_blank">Link</a>
      <a  className={styles.gradientText} href="/" target="_blank">Link</a>
    </div>

      <div className={styles.navRight}>
        <Conbutton />
      </div>
      
      </div>
  );
}
export { Navbar };
