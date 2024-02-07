import { Link } from "react-router-dom"

export default function Footer() {
    return(  
    <footer className="mainFooter">
      <nav>
        <ul className="mainFooterLinks">
          <li className="mainFooterLink">
            <Link to={"/"}>Support</Link>
          </li>
          <li className="mainFooterLink">
          <Link to={"/"}>Terms of Use</Link>
          </li>
        </ul>
      </nav>
    </footer>
    )
  
}
