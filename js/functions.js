function getNumber() {
  return Math.floor(Math.random() * 100);
}

function addNumber() {
  let countTableElem = table.lastChild.childElementCount;
  if (countTableElem % 6 == 0) {
    tr = document.createElement("tr");
  } else {
    tr = table.lastChild;
  }
  td = document.createElement("td");
  let newNumber = getNumber();
  td.innerText = newNumber;
  if (newNumber >= 50) {
    td.className = "orange";
  }
  tr.append(td);
  countTableElem++;
  table.append(tr);
}
