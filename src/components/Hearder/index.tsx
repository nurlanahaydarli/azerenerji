

import CubicsIcon from "@/assets/icon/CubicsIcon";
import styles from "./header.module.css";
import logoImg from "@/assets/img/mainLogo.png"



export default function Header() {
  
  return (
    <>
        <div className={styles.header_top}>
            <div className={styles.header_logo_left}>
                <img src={logoImg} alt="" />
            </div>
            <CubicsIcon />
        </div>
        <div className={styles.header_bottom}>
                
            </div>
    </>
  );
}
