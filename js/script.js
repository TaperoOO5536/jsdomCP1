const a = Array.from({ length: 30 }, () => getNumber());
const root = document.querySelector("#root");
const table = document.createElement("table");
table.className = "table";
let count = 0;
for (let i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 6; j++) {
    let td = document.createElement("td");
    td.innerText = a[count];
    if (a[count] >= 50) {
      td.className = "orange";
    }
    tr.append(td);
    count++;
  }
  table.append(tr);
  console.log(table.innerHTML);
}
root.append(table);
