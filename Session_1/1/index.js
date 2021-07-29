let column = prompt("Column= ?");
let row = prompt("Row= ?");
let table = document.querySelector("table");

for (let i = 0; i < row; i ++) {
    table.innerHTML += '<tr class="tr"></tr>';
}

document.querySelectorAll("tr").forEach(element => {
    for(let i = 0; i < column; i ++) {
        element.innerHTML += '<td><input type="text"></td>';
    }
});