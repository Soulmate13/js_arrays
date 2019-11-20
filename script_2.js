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

// let chequeMax = function (_cheque) {
//     let max;
//     max = _cheque[0].price * _cheque[0].count;

//     for (i = 0; i < _cheque.length; i++) {
//         if ((_cheque[i + 1].price * _cheque[i + 1].count) > (_cheque[i].price * _cheque[i].count) {
//             max = _cheque[i + 1].price * _cheque[i + 1].count;
//         };
//     };

//     document.getElementById("desk3").innerHTML = `<pre>The max is ${sum}</pre>`

// }

// Подсчет средней стоимости одного товара в чеке.