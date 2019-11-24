// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styles = [
    {
        "fontFamily": "Roboto",
        "fontSize": 15,
        "color": "red"
    },
    {
        "fontFamily": "Times New Roman",
        "fontSize": 20,
        "color": "blue"
    },
    {
        "fontFamily": "Arial",
        "fontSize": 25,
        "color": "green"
    },

]

let printText = function (_styles) {

    _text = prompt("What do you want to write?")
    let buff;

    buff = ``

    for (let i = 0; i < _styles.length; i++) {

        buff += `<p style="font-family:${_styles[i].fontFamily};
                        font-size:${_styles[i].fontSize}px;
                        color:${_styles[i].color}">${_text}</p> \n`
    }

    document.getElementById("desk5").innerHTML = `<pre>${buff}</pre>`

}