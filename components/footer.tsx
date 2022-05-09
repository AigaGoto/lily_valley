import { faTwitter, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
        <div className="footer">
            <span> copyright@ Aiga Goto </span>
            <FooterIcon url="https://twitter.com/lily_valley___" icon={faTwitter} />
            <FooterIcon url="https://www.instagram.com/used_lily_valley.___/" icon={faInstagram} />
            <FooterIcon url="https://line.me/R/ti/p/@323ahnxo" icon={faLine} />
        </div>
    )
}

// ヘッダーのアイコンの枠組み
function FooterIcon(props: any) {
    return (
        <a href={props.url} target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={props.icon} className="footerIcon" />
        </a>
    )
}