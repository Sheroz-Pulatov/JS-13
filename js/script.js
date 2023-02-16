
let cars = [{
    id: Math.random(),
    company: 'bmw',
    model: 'm5',
    engine: 1,
    color: 'black',
    price: 110000,
    year: 2019,
    image: 'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80'
},
{
    id: Math.random(),
    company: 'mercedes',
    model: 'img63',
    engine: 6.3,
    color: 'black',
    price: 350000,
    year: 2022,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
},
{
    id: Math.random(),
    company: 'chevrollette',
    model: 'camaro',
    engine: 4,
    color: 'white',
    price: 90000,
    year: 2018,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
},
{
    id: Math.random(),
    company: 'vaz',
    model: 'lada',
    engine: 0.7,
    color: 'blue',
    price: 5000,
    year: 2010,
    image: 'https://images.unsplash.com/photo-1549524570-c2e6f1436aef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80'
},
{
    id: Math.random(),
    company: 'ferrari',
    model: 'spider',
    engine: 4.5,
    color: 'red',
    price: 250000,
    year: 2015,
    image: 'https://images.unsplash.com/photo-1656376050569-908d664944e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80'
},
{
    id: Math.random(),
    company: 'mclaren',
    model: 'sena',
    engine: 5.6,
    color: 'yellow',
    price: 300000,
    year: 2022,
    image: 'https://images.unsplash.com/photo-1621687827978-601199c1ed9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
},
{
    id: Math.random(),
    company: 'lambargini',
    model: 'diablo',
    engine: 5,
    color: 'black',
    price: 400000,
    year: 2022,
    image: 'https://images.unsplash.com/photo-1660678810435-dd058fe41323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
},
{
    id: Math.random(),
    company: 'gm',
    model: 'malibu 2',
    engine: 2.5,
    color: 'white',
    price: 30000,
    year: 2021,
    image: 'https://i.pinimg.com/originals/ad/65/84/ad6584cf23803422048cc08d40226f0e.jpg'
},
]

let maxSpeed = cars[0].engine;
let maxPrice = cars[0].price;
let maxNum = 0;
let averSpeed = 0;

for (let per of cars) {
    if (maxSpeed < per.engine) {
        maxSpeed = per.engine
    };
    if (maxPrice < per.price) {
        maxPrice = per.price
    };
    maxNum += per.engine;
};

averSpeed = maxNum / cars.length;

let perCarEng = [];
cars.filter(item => {
    perCarEng.push(Math.floor(item.engine * 100 / maxSpeed) + ' % ')
})

console.log(
    `Скорость машин в процентах ${perCarEng} \n`,
    `Cамая дорогая машина ${maxPrice} \n`,
    `Самая быстрая машина ${maxSpeed} \n`,
    `Средняя скорость всех машин ${averSpeed} `
);


for (let car of cars) {
    let isRed = ""
    if (car.price > 50000) {
        isRed = "green"
    } else {
        isRed = "blue"
    }

    document.write(`
    Model: ${car.model} <br>
    Engine: ${car.engine} <br>
    Color: <div class="color" style="background-color: ${car.color}" ></div> <br>
    <b style="color: ${isRed};" > Price: ${car.price}$ </b> <br>
    Year: ${car.year} <br>
    <img src="${car.image}" alt="${car.company}" /> <hr>
`)
}

// найти самую дорогую машину
// найти самую быструю машину
// определть среднюю скорость всех машин
// определть соотношение скорости машин в процентах