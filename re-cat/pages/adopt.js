export default function adoptCat() {
  const cats = [
    {
      img: "/4.jpg",
      name: "Lusti",
      type: "rövidszőrű",
      age: "10 éves",
      sex: "nőstény",
      description:
        "A nevem Lusti. Nagyon szeretek az ablakból nézelődni, meleg helyeken szunyókálni. Más háziállatokkal nem jövök jól ki, mert nem szeretem ha zaklatnak.",
    },
    {
      img: "/5.jpg",
      name: "Grumpy",
      type: "sziámi",
      age: "2 éves",
      sex: "kandúr",
      description:
        "A nevem Grumpy. Nem szeretem az embereket, se bármilyen más élőlényt, kivéve a gazdámat, aki a legfontosabb a világon. ",
    },
    {
      img: "/6.jpg",
      name: "Blacky",
      type: "rövidszőrű",
      age: "3 éves",
      sex: "nöstény",
      description:
        "Fekete macska vagyok, de a mondással ellentétben én szerencsét hozok.",
    },
    {
      img: "/7.jpg",
      name: "Bubu",
      type: "skót lógófülű",
      age: "4 hónapos",
      sex: "nőstény",
      description: "",
    },
    {
      img: "/8.jpg",
      name: "Tigris",
      type: "main coon",
      age: "1 éves",
      sex: "nőstény",
      description:
        "Félig kinti, félig benti, félig tigrisként éltem eddig, de még kicsi vagyok, benti cica is lehetek. Sok madarat és sok egeret vittem már haza, mert a gazdám nem tudott vadászni. ",
    },
  ];

  return (
    <div className="adopt-container">
      {cats.map((e, i) => (
        <div className="adopt-cat-card" key={i}>
          <img className="adopt-img" src={e.img} />
          <br />
          <label>
            <strong>Név: </strong>
            {e.name}
          </label>
          <br />
          <label>
            <strong>Kor: </strong>
            {e.age}
          </label>
          <br />
          <label>
            <strong>Neme: </strong>
            {e.sex}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
}
