// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let shoppingList = [{
    "name": "Apples",
    "count": 3,
    "purchased": true
}, {
    "name": "Pears",
    "count": 5,
    "purchased": true
}, {
    "name": "Beetroot",
    "count": 3,
    "purchased": false
}
];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

let shoppingListPrint = function (_shoppingList) {

    shoppingList.sort(function (a, b) {
        return a.purchased - b.purchased
    });

    let _buff = `<ul>`
    for (const key in _shoppingList) {
        if (typeof _shoppingList[key] == "object") {
            _buff += `<li> ${key.toUpperCase()} : ${shoppingListPrint(_shoppingList[key])}</li>`
        } else {
            _buff += `<li> ${key}:${_shoppingList[key]} </li>`
        }
    }
    _buff += `</ul>`;
    return _buff;
};

let DisplayList = function () {
    document.getElementById("root").innerHTML = `<pre>${shoppingListPrint(shoppingList)}</pre>`;
};

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

let shoppingListAdd = function (_shoppingList) {

    let _item = prompt("What do you want to add to the shopping list?")
    let present = false;

    for (i = 0; i < _shoppingList.length; i++) {
        if (_item.toUpperCase() === _shoppingList[i].name.toUpperCase()) {
            _shoppingList[i].count = _shoppingList[i].count + 1;
            present = true;
        }
    };

    if (present == false) {
        _shoppingList.push({ "name": `${_item}`, "count": 1, "purchased": false })
    };

    DisplayList();
};

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let shoppingListPurchase = function (_shoppingList) {

    let _item = prompt("Bought something?")

    for (i = 0; i < _shoppingList.length; i++) {
        if (_item.toUpperCase() === _shoppingList[i].name.toUpperCase()) {
            _shoppingList[i].purchased = true;
        }
    };
    DisplayList();
}