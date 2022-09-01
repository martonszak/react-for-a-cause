import Link from "next/link";
export default function Footer(props) {
  const menu = [{ text: "Kapcsolat", href: "/contact" }];
  if (props.hidden === true) {
    return (
      <div className="footer-container hide">
        <ul className="footer-list">
          <li className="footer-list-item">
            <p className="footer-list-campaign">
              Támogasd az ivartalanító, túlszaporodás elleni kampányunkat!
            </p>
            <p className="adoszam">
              <strong>Adószámunk: 18011476-1-13</strong>
            </p>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="footer-container">
      <ul className="footer-list">
        <li className="footer-list-item">
          <p className="footer-list-campaign">
            Támogasd az ivartalanító, túlszaporodás elleni kampányunkat!
          </p>
          <p className="adoszam">
            <strong>Adószámunk: 18011476-1-13</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}
