// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
let cheque = [{
    "name": "Apples",
    "count": 3,
    "price": 30
}, {
    "name": "Pears",
    "count": 4,
    "price": 25
}, {
    "name": "Beetroot",
    "count": 3,
    "price": 40
}
];
// Распечатка чека на экран;

let chequePrint = function (_cheque) {

    let _buff = `<ul>`
    for (const key in _cheque) {
        if (typeof _cheque[key] == "object") {
            _buff += `<li> ${key.toUpperCase()} : ${chequePrint(_cheque[key])}</li>`
        } else {
            _buff += `<li> ${key}:${_cheque[key]} </li>`
        }
    }
    _buff += `</ul>`;
    return _buff;
};

let DisplayCheque = function () {
    document.getElementById("desk").innerHTML = `<pre>${chequePrint(cheque)}</pre>`;
};
// Подсчет общей суммы покупки;

let chequeCount = function (_cheque) {

    let sum = 0;

    for (i = 0; i < _cheque.length; i++) {
        sum += _cheque[i].price * _cheque[i].count;
    };

    document.getElementById("desk2").innerHTML = `<pre>The sum is ${sum}</pre>`

}

// Получение самой дорогой покупки в чеке;

let chequeMax = function (_cheque) {
    let max;
    max = _cheque[0].price * _cheque[0].count;

    let buff;
    buff = `${_cheque[0].name} is the most expensive with the price of ${max}`;

    for (i = 0; i < _cheque.length; i++) {
        if ((_cheque[i].price * _cheque[i].count) > max) {
            max = _cheque[i].price * _cheque[i].count;
            buff = `${_cheque[i].name} is the most expensive with the price of ${max}`
        };
    };

    document.getElementById("desk3").innerHTML = `<pre>${buff}</pre>`

}

// Подсчет средней стоимости одного товара в чеке.

let averageCheque = function (_cheque) {

    let totalPrice = 0;

    for (let i = 0; i < _cheque.length; i++) {
        totalPrice += (_cheque[i].price * _cheque[i].count)
    }

    let averagePrice;

    averagePrice = totalPrice / _cheque.length;

    document.getElementById("desk4").innerHTML = `<pre>The average price of 1 item is ${averagePrice.toFixed(3)}</pre>`

}