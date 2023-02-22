import property from "../models/Property.js";


const createData = () => {
    let propertiesArr = [
      new property(
        "BMW",
        120000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
      new property(
        "MERCEDS",
        150000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
      new property(
        "LAMBORGINI",
        5000000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
      new property(
        "FERARI",
        350000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
      new property(
        "LAMBORGINI",
        5000000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
      new property(
        "FERARI",
        350000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`
      ),
    ];
    return propertiesArr;
};
//check if have properties in data
const setInitialData = () => {
    let properties = localStorage.getItem("props")
    if (properties){
        return;
    }
    localStorage.setItem("props", JSON.stringify(createData()));
};

    setInitialData();
    
