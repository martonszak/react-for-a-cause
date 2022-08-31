import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [likes, setLikes] = useState(0);
  const menu = [
    { text: "Főoldal", href: "/" },
    { text: "Rólunk", href: "/about" },
    { text: "Kapcsolat", href: "/contact" },
    { text: "Örökbefogadás", href: "/adopt" },
    { text: "Tippek", href: "/badreasons" },
    {text: "A jó módszer", href: "/goodmethod" },
  ];

  const [count, setCount] = useState(0);

  function handleClick() {
    if (count === 0 ) {
      setCount(count + 1);
    } 
    if ( count === 1) {
      setCount(count - 1);
    }
  }
if (count === 0){
  return (
    <div>
    <div className="navbar-mobile">
      <button className="navbar-button" onClick={handleClick}>| | |</button>
    </div>
    <div className="navbar-container">
      <ul className="navbar-list">
        {menu.map((e, i) => (
          <li className="navbar-list-item" key={i}>
            <Link className="navbar-link" href={e.href}>
              <a className="navbar-a">{e.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
if (count === 1) {
  return (
    <div>
    <div className="navbar-mobile">
      <button className="navbar-button-mobile" onClick={handleClick}>anyad</button>
    </div>
    <div className="navbar-container-mobile">
      <ul className="navbar-list-mobile">
        {menu.map((e, i) => (
          <li className="navbar-list-item-mobile" key={i}>
            <Link className="navbar-link-mobile" href={e.href}>
              <a className="navbar-a-mobile">{e.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
}
