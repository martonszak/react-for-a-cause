import Image from 'next/image'

export default function adoptCat() {
    const cats = [
        {
            img: "https://stories.freecdr.com/wp-content/uploads/2022/07/shorthair-cats-breed.jpg", 
            name: "Lusti",
            type: "Shorthair Cats",
            age: "10 years",
            sex: "female",
            description: "Lovely, sleepy cat"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOm1gCfDV4tLgNCntvI_UQdWJfhG3F5GSU6g&usqp=CAU",
            name: "Grumpy",
            type: "Siamis",
            age: "2 years",
            sex: "female",
            description: "Loves to play, hate strangers"
        },
        {
            img:"https://imageio.forbes.com/specials-images/imageserve/62619e3d45164baec55d8631/0x0.jpg?format=jpg&width=1200",
            name: "Blacky",
            type: "",
            age: "3 years",
            sex: "female",
            description: "Lovely, sleepy cat"
        },
        {
            img: "https://images.ctfassets.net/440y9b545yd9/6grJk9ZQXPqgQ3JoJWDZBI/b9f9f47826469726faa1dff26fe9781b/Scottish_Fold_brindle.jpg",
            name: "Bubu",
            type: "Scottish Fold Cats",
            age: '4 months',
            sex: "female",
            description: "Lovely, sleepy cat"
        },
        {
            img: "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/article/main-picture/5e8b329878de4003882855.jpg",
            name: "Tiger",
            type: "Maine Coon Cats",
            age: '1 years',
            sex: 'female',
            description: "Lovely, sleepy cat"
        },
    ];

    return (
        <div className="adopt-cont">
            {cats.map((e, i) => (
                <div className="adoptable-cat-card" key={i}>
                    <img src={e.img} width="100px" height="100px"/><br/>
                    <label><strong>Name: </strong>{e.name}</label><br/>
                    <label><strong>Age: </strong>{e.age}</label><br/>
                    <label><strong>Sex: </strong>{e.sex}</label><br/>
                </div>
            ))}
        </div>
    );
}