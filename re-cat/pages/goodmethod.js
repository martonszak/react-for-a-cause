//import styles from "../styles/Home.module.css";
import Image from 'next/image'
import Smileycat from "../public/smileycat.jpg"
import Smileycat2 from "../public/smileycat2.jpg"
import Smileycat3 from "../public/smileycat3.jpg"
//import Link from "next/link";
export default function GoodMethod() {
    //const menu = [{ text: "Kapcsolat", href: "/contact" }];
    return (
        <div className="reasons-container">
            <h1>Csapdázz-ivartalaníts-helyezd vissza
                TNR, Trap-Neuter-Return</h1>
            <ul className="goodmethod-list">
                {/* <li className="goodmethod-list-item"> */}
                    <p>A füzetből megismerhető az a nemzetközileg elfogadott és elterjedt módszer (TNR, trap-neuter-return, vagyis csapdázz, ivartalaníts, helyezd vissza) amelynek lényege a befogás, ivartalanítás és az eredeti élőhelyre történő visszahelyezés.
                        A téma kutatói felismerték, hogy ha egy területről eltávolítják az ott élő kóbor, félvad macskákat, a vákuum csak rövid ideig marad fenn, mert hamarosan új egyedek települnek a területre és kezdődik minden elölről.
                        Ha viszont az ivartalanított macskákat visszahelyezik a „lakóhelyükre”, az állomány stabilizálódik, nem lesznek új szaporulatok, a területen élő macskák távol tartják az idegen macskákat.
                       <a className='pdfclass' href='http://macskakert.hu/feral.pdf'> A füzet pdf formátumban egy képre kattintva érhető el.</a> Papír alapú formában elfogyott, nem megrendelhető.
                        A kiadvány végén található Felmérés a programról csak mintaként szolgál, nem beküldhető.
                        Az Universities Federation for Animal Welfare számos hasznos tanáccsal, felkészülési javaslattal, módszertani útmutatóval rendelkezik állatvédelmi témákban, érdemes áttekinteni a honlapjukat. </p>
                    <div classnName="linkcontainer">
                        <p>Angol nyelven itt találhatók leírások a TNR módszerről: </p>
                   
                    <ul>
                        <li className="link"><a href="https://www.alleycat.org/our-work/trap-neuter-return/">www.alleycat.org: Trap-neuter-return</a></li>

                        <li className="link"><a href="http://www.humanesociety.org/sites/default/files/archive/assets/pdfs/pets/nc_tnr_handbook_04.pdf">www.humanesociety.org: Tnr handbook</a></li>

                        <li className="link"><a href="https://resources.bestfriends.org/article/tnr-stray-cats-meaning-history-statistics">resources.bestfriends.org: Tnr stray cats history statistics</a></li>
                    </ul>
                    <div className="smileycat">
                    <a href='http://macskakert.hu/feral.pdf'><Image  src={Smileycat3} alt="Cat cuteness" width={350} height={350}className="img1"/></a>
                    <a href='http://macskakert.hu/feral.pdf'><Image  src={Smileycat2} alt="Cat cuteness" width={350} height={350}className="img1"/></a>
                    <a href='http://macskakert.hu/feral.pdf'><Image  src={Smileycat} alt="Cat cuteness" width={350} height={350}className="img1"/></a>
                    
                    </div>
                    </div>
                {/* </li> */}
            </ul>
        </div>
    );
}