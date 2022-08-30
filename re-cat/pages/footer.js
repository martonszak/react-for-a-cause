import Link from "next/link";
export default function Footer(){
    const menu = [
        { text: "Támogass minket", href: "/supportus" },
        { text: "Kontakt", href: "/contact" },
      ];
        return (
            <div className="footer-container">
              <ul className="footer-list">
                {menu.map((e, i) => (
                  <li className="footer-list-item" key={i}>
                    <Link className="footer-link" href={e.href}>
                      <a className="footer-a">{e.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
