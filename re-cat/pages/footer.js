import Link from "next/link";
export default function Footer() {
  const menu = [{ text: "Kapcsolat", href: "/contact" }];
  return (
    <div className="footer-container">
      <ul className="footer-list">
        <li className="footer-list-item">
          <p>
            Támogasd az ivartalanító, túlszaporodás elleni kampányunkat!
            Adószámunk: 18011476-1-13
          </p>
        </li>
      </ul>
    </div>
  );
}
