import Link from "next/link"
import style from '../styles/Button.module.css'

import { faTwitter, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ヘッダーの構築
export default function Header() {
    return(
        <div className="header" >
            <HeaderLink link='/' text='Home' />
            <HeaderLink link='/about' text='About' />
            <HeaderIcon url="https://twitter.com/lily_valley___" icon={faTwitter} />
            <HeaderIcon url="https://www.instagram.com/used_lily_valley.___/" icon={faInstagram} />
            <HeaderIcon url="https://line.me/R/ti/p/@323ahnxo" icon={faLine} />
        </div>
    )
}

// ヘッダーのページ遷移要素の枠組み
function HeaderLink(props: any) {
    return (
        <Link href={props.link}>
                    <a className="btnlinestretches4" >
                        <span >{props.text}</span>
                    </a>
        </Link>
    )
}

// ヘッダーのアイコンの枠組み
function HeaderIcon(props: any) {
    return (
        <a href={props.url} target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={props.icon} className="headerIcon" />
        </a>
    )
}