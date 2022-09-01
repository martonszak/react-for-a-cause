/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const content = [
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">Túl drága</div>
    <div className="bad-reasons-text">
      Mihez képest? Az évi két vagy több alom etetéséhez és felneveléséhez?
      Ahhoz az elpazarolt időhöz, amit azzal töltünk, hogy gazdát keresünk a
      kicsinyeknek? Az új gazdák keresését célzó hirdetések árához? Minden
      relatív. A kandúrok és nőstények ivartalanítása nagyjából 10-20 jobb
      minőségű macskakonzerv árába kerül. Látszólag ennyit spórolunk meg, ha nem
      ivartalanítjuk a macskát. Az ivartalanítás viszont egyszeri költség, egy
      életre megszabadulunk általa a kölykök etetésének, felnevelésének és
      elhelyezésének nyűgétől és költségeitől, amelyek ennek többszörösét teszik
      ki.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Azt szeretném, ha a gyerekek tanúi lehetnének a születés csodájának
    </div>
    <div className="bad-reasons-text">
      Ó jaj. S mi a helyzet a macskák és kutyák ezreivel, amelyeket a születés
      csodájának megszemlézése után kidobnak az utcára, vagy azokkal, amelyek
      rövid, sanyarú életük végén állatmenhelyen végzik, s ott a túlzsúfoltság
      miatt elaltatják őket? Szeretné, ha ezt is látnák a gyermekei? A születés
      csodájáról pedig csak annyit, hogy Cirmi inkább rejtett zugot keres, s ott
      hozza világra kölykeit, mert nem híve ugyanis a rivaldafénynek ily időben.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Mindig sikerül számukra jó helyet találnunk
    </div>
    <div className="bad-reasons-text">
      Csak nem? Jó Önnek, mert olyan sok barátja és ismerőse van, akiknél évente
      legalább egy tucat kismacskát is el tud helyezni. Viszont a piacon, az
      utcán, állatvásáron papírdobozból „kimért” kismacskák nem biztos, hogy
      valóban „jó helyre” kerülnek. S mi a biztosíték arra, hogy hat hónap
      múltán az elajándékozott kismacska utódait nem kínálják ugyanígy
      papírdobozból bárkinek, csak vigye? Ha ez bekövetkezik, az is az Ön lelkén
      szárad.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">Túl fiatalok az ivartalanításra</div>
    <div className="bad-reasons-text">
      A macskák hat hónapos kor után ivartalaníttathatóak. A nőstények akár 5-6
      hónapos korukban is fogamzásképesek lehetnek. Ez kívülről ugyanis nem
      látszik. Legjobb, ha nem vár, hanem kezébe veszi a macska családtervezési
      gondjait. S főképpen ne várjon az első alom megszületéséig, mert erre
      semmiféle szüksége nincs az állatnak.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">Meg fog hízni és ellustul</div>
    <div className="bad-reasons-text">
      Ha ez igaz, akkor az ellenkezője is, tehát a macska a sorozatos ellésektől
      lesz friss és egészséges. Az ivartalanított kedvenc csak akkor hízik el,
      ha Ön hagyja. A hízás és ellustulás oka macskáknál, éppen úgy, mint az
      embereknél, a szükségesnél több kalória bevitel és a kevés mozgás. A
      nőstény-keresésben kilométereket loholó kandúr és a kölykeit szoptató
      nőstény szervezete nyilván több kalóriát fogyaszt, mint azé a macskáé,
      amely ideje legnagyobb részében a meleg radiátoron heverészik. Fogja
      vissza az eleség mennyiségét, játsszon időnként a macskájával — akkor nem
      lesz oka elhízni.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Van helyünk, és nagyon szeretjük az állatokat
    </div>
    <div className="bad-reasons-text">
      Ha igazán szereti macskáját vagy kutyáját, ivartalaníttassa. Ha van helye
      továbbiak tartására, fogadjon örökbe gazdátlan állatot, ne maga állítsa
      elő őket. S ne feledje, az utódok is hamarosan szaporodni fognak. Egy
      nősténytől hét év alatt származó utódok, ha valamennyien továbbszaporodnak
      nem kevesebb, mint 420.000 macskának adhatnak életet. Ennyi helye mégsem
      lehet. Arról nem is szólva, hogy a macskák általában éppen a macskák
      társaságát kedvelik a legkevésbé. Tapasztalat, hogy két macska jól kijön
      egymással, de a harmadik már nehezen, a negyedik még nehezebben, s ennél
      több pedig jószerével alig viseli el a macskasűrűséget. Gyakoriak a
      verekedések és civakodások. Ha Ön szereti az állatot, akkor annak
      egészségi és lelki igényeit is figyelembe veszi.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Soha nem tévesztem szem elől, nem tud bepárzani
    </div>
    <div className="bad-reasons-text">
      Ilyen éber ember nincs. A tüzelő macska vagy kutya megleli a módját, hogy
      kiszökjön, s párt keressen magának. Ha pedig ő nem megy ki a kertből, majd
      bejönnek a lovagjai.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Az állatnak szüksége van egy alomra, hogy lenyugodjon
    </div>
    <div className="bad-reasons-text">
      Egek ura! Ennek az ostoba tévhitnek egyszer és mindenkorra véget kell
      vetni. Hölgyeim, Önök „lenyugodtak” miután gyermekük lett? Semmiféle
      orvosi bizonyíték nem szól amellett, hogy a kölykezés, akár egyszeri, akár
      többszöri hasznos az állatnak. Sőt. Ez az elmélet legalább olyan ostoba,
      mint az a hit, hogy az ivartalanított kutyából nem lehet házőrző. A nemi
      hormonok csupán a fajfenntartásra ösztönzik az állatot, a fajtára jellemző
      magatartásformák az ivartalanítás hatására nem változnak meg. A kutya
      kutya, a macska macska marad. Csak legfeljebb „lenyugszik”. Az
      ivartalanítástól.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Olyan macskát akarok, amelyik pont úgy néz ki, mint a Cirmikém, avagy
      szeretném tudni milyen utód születik, ha a fél-sziámimat a szomszéd
      fél-perzsájával pároztatom
    </div>
    <div className="bad-reasons-text">
      Az esély arra, hogy akár megközelítőleg is Cirmikére hasonlító utód
      szülessen, minimális. Egy macska küllemét és jellemét génjei határozzák
      meg, ezeket anyjától és apjától örökli. A nászban szereplő apaállat
      rendszerint ismeretlen, s Cirmi kölykei éppen úgy üthetnek az apjukra,
      mint az anyjukra. Ha viszont ifjú Mendelnek képzeljük magunkat, az út még
      rögösebb. A kedvenc állat nem kísérletezésre való. Ráadásul a
      keresztezések eredménye a macskagenetikához értő ember számára papíron is
      levezethető. A fél-sziámi és fél-perzsa párosításból közönséges
      házimacskák fognak születni. Ez biztos. Kár megpróbálni. Ha a
      macskatenyésztés komolyan érdekli, jelentkezzen macskás egyesületbe,
      ivartalanítsa a fél-sziámiját, tanulja meg a fajtákról, mindazt, amit
      tudni kell, s csak akkor lásson munkához, mint igazi szakember.
    </div>
  </div>,
  <div className="bad-reasons-list-item">
    <div className="bad-reasons-header">
      Meg akartam csináltatni a műtétet, de...
    </div>
    <div className="bad-reasons-text">
      Ne várjon, MOST végeztesse el! Hibát mindenki véthet, elég baj, hogy
      Cirminek ott vannak a kölykei. Helyezze el őket, vigye Cirmit az
      állatorvoshoz és beszélje rá az új tulajdonosokat, hogy ne kövessék el azt
      a hibát, amit Ön. Az ivartalanított macska boldog, kiegyensúlyozott állat.
      Hosszabb életre számíthat, mint a műtéten át nem esett fajtársai. Ha
      tudná, megköszönné Önnek, hogy jót tett vele!
    </div>
  </div>,
];

let timer;

export default function Badreasons() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [count, setCount] = useState(0);

  const goBack = () => {
    if (count === 0) {
      setCount(content.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const goForward = () => {
    if (count === content.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    clearTimeout(timer);
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
    if (mx <= -50) {
      timer = setTimeout(() => goBack(), 200);
    }
    if (mx >= 50) {
      timer = setTimeout(() => goForward(), 200);
    }
  });

  return (
    <div className="bad-reasons-container">
      <div className="bad-reasons-title">A 10 legrosszabb kifogás</div>
      <div className="bad-reasons-pager-text">
        Húzd a szöveget oldalra további tippekhez!
      </div>
      <animated.div
        {...bind()}
        style={{ x, touchAction: "none" }}
        className="bad-reasons-list"
      >
        <button onClick={goBack} className="page-button">
          {"<"}
        </button>
        {content[count]}
        <button onClick={goForward} className="page-button">
          {">"}
        </button>
      </animated.div>
    </div>
  );
}
