import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const menu = [
    { text: "Főoldal", href: "/" },
    { text: "Rólunk", href: "/about" },
    { text: "Kapcsolat", href: "/contact" },
    { text: "Örökbefogadás", href: "/adopt" },
    { text: "Tippek", href: "/badreasons" },
    { text: "A jó módszer", href: "/goodmethod" },
  ];

  const [count, setCount] = useState(0);

  function handleClick() {
    if (count === 0) {
      setCount(1);
    }
    if (count === 1) {
      setCount(0);
    }
    if (count === 1) {
      return (
        <div>
          <div className="hamburger-icon" id="icon" onClick={handleClick}>
            <div className="icon-1 a" id="a"></div>
            <div className="icon-2 c" id="b"></div>
            <div className="icon-3 b" id="c"></div>
            <div className="clear"></div>
          </div>
          <nav className="show">
            <ul className="navbar-list-mobile">
              {menu.map((e, i) => (
                <li className="navbar-list-item-mobile" key={i}>
                  <Link className="navbar-link-mobile" href={e.href}>
                    <a className="navbar-a-mobile">{e.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="dark-blue slide" id="blue"></div>
        </div>
      );
    }
    if (count === 0) {
      return (
        <div>
          <div className="hamburger-icon" id="icon" onClick={handleClick}>
            <div className="icon-1" id="a"></div>
            <div className="icon-2" id="b"></div>
            <div className="icon-3" id="c"></div>
            <div className="clear"></div>
          </div>
          <nav>
            <ul className="navbar-list">
              {menu.map((e, i) => (
                <li className="navbar-list-item" key={i}>
                  <Link className="navbar-link" href={e.href}>
                    <a className="navbar-a">{e.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="dark-blue" id="blue"></div>
        </div>
      );
    }
    if (count === 1) {
      return (
        <div>
          <div className="hamburger-icon" id="icon" onClick={handleClick}>
            <div className="icon-1 a" id="a"></div>
            <div className="icon-2 c" id="b"></div>
            <div className="icon-3 b" id="c"></div>
            <div className="clear"></div>
          </div>
          <nav className="show">
            <ul className="navbar-list-mobile">
              {menu.map((e, i) => (
                <li className="navbar-list-item-mobile" key={i}>
                  <Link className="navbar-link-mobile" href={e.href}>
                    <a className="navbar-a-mobile">{e.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="dark-blue slide" id="blue"></div>
        </div>
      );
    }
  }
}
