import Link from "next/link";
export default function Footer() {
  const menu = [{ text: "Kapcsolat", href: "/contact" }];
  return (
    <div className="footer-container">
      <ul className="footer-list">
        <li className="footer-list-item">
          <p>Támogasd az ivartalanító, túlszaporodás elleni kampányunkat!</p>
          <p className="adoszam">
            <strong>Adószámunk: 18011476-1-13</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}
