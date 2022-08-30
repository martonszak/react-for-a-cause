import Link from "next/link";

export default function Navbar() {
  const menu = [
    { text: "Főoldal", href: "/" },
    { text: "Rólunk", href: "/about" },
    { text: "Kapcsolat", href: "/contact" },
    { text: "Örökbefogadás", href: "/adopt" },
    { text: "Tippek", href: "/badreasons" },
  ];

  return (
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
  );
}
