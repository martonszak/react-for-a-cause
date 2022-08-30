export default function Menu() {
  const menu = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const Header =(
    <header>
      <nav id="menu">
        <ul>
          {menu.map((e) => (
            <a href={e.href}>{e.text}</a>
          ))}
        </ul>
      </nav>
    </header>
  );
  return Header;

}