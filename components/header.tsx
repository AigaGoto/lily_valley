import Link from "next/link"
import style from '../styles/Button.module.css'

import { faTwitter, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ヘッダーの構築
export default function Header() {
    return(
        <div className={style.header}>
            <HeaderLink link='/' text='Home' />
            <HeaderLink link='/about' text='About' />
            <FontAwesomeIcon icon={faTwitter} className={style.headIcon} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLine} />
        </div>
    )
}

// ヘッダーの要素の枠組み
function HeaderLink(props: any) {
    return (
        <Link href={props.link}>
                    <a className={style.btnlinestretches4}>
                        <span >{props.text}</span>
                    </a>
        </Link>
    )
}