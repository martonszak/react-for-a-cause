import Link from "next/link";

export default function Navbar() {
  const menu = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Adopt", href: "/adopt" },
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
