// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let rooms = [
    {
        name: "110",
        capacity: 20,
        department: "front-end"
    },
    {
        name: "111",
        capacity: 15,
        department: "back-end"
    },
    {
        name: "112",
        capacity: 10,
        department: "node js"
    },
    {
        name: "113",
        capacity: 12,
        department: "QA"
    },
]

let desk = document.getElementById("desk6");
let table = document.createElement("table");
desk.appendChild(table);


let formTable = function () { // function that forms the top of the table
    let thead = document.createElement("thead");
    table.appendChild(thead);

    let theadr = document.createElement("tr");
    thead.appendChild(theadr)

    let td_one = document.createElement("td")
    td_one.innerText = "No."
    let td_two = document.createElement("td")
    td_two.innerText = "Capacity"
    let td_three = document.createElement("td")
    td_three.innerText = "Department"
    theadr.appendChild(td_one);
    theadr.appendChild(td_two);
    theadr.appendChild(td_three);
}


let printRooms = function (_rooms) { // printing the rooms
    table.innerHTML = ''

    formTable();

    for (let i = 0; i < _rooms.length; i++) {

        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td1 = document.createElement("td");
        td1.innerText = `${_rooms[i].name}`
        tr.appendChild(td1)

        let td2 = document.createElement("td");
        td2.innerText = `${_rooms[i].capacity}`
        tr.appendChild(td2)

        let td3 = document.createElement("td");
        td3.innerText = `${_rooms[i].department}`
        tr.appendChild(td3)
    }

}

let printFacultyRooms = function (_rooms) { // choose a specific department to print

    let facultyRooms = [];
    let department = prompt("What department to print?");

    for (let j = 0; j < _rooms.length; j++) {
        if (department.toLowerCase() == _rooms[j].department.toLowerCase()) {
            facultyRooms.push(_rooms[j]);
        }
    }
    printRooms(facultyRooms);
}

let printForSpecificClass = function (_rooms) { // print a correct room for a class

    let myclass = {
        capacity: prompt("How many people are in your class?"),
        department: prompt("What is your department?")
    }

    let classrooms = []

    for (let j = 0; j < _rooms.length; j++) {
        if ((myclass.capacity <= _rooms[j].capacity) && (myclass.department.toLowerCase() == _rooms[j].department.toLowerCase())) {
            classrooms.push(_rooms[j]);
        }
    }
    printRooms(classrooms);
}

let sortDepartment = function (_rooms) { // sort by department name
    _rooms.sort(function (a, b) {
        if (a.department.toLowerCase() < b.department.toLowerCase()) { return -1; }
        if (a.department.toLowerCase() > b.department.toLowerCase()) { return 1; }
        return 0;
    })

    printRooms(_rooms);
}

let sortCapacity = function (_rooms) { // sort by room capacity
    _rooms.sort(function (a, b) {
        if (a.capacity < b.capacity) { return -1; }
        if (a.capacity > b.capacity) { return 1; }
        return 0;
    })

    printRooms(_rooms);

}