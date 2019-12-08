   function create() {
            let form = document.getElementById("form");
            form.style = "display: none";
            let fun = document.getElementById("Functions");
            fun.style = "display: block";
            let rows = +document.getElementById("Rows").value;
            let cols = +document.getElementById("Cols").value;
            let tableWrap = document.getElementById("tableWrap");
            let tableCode = `<table><tbody>`;
            for (let row = 0; row < rows; ++row) {
                tableCode += `<tr>`;
                for (let col = 0; col < cols; ++col) {
                    tableCode += `<td id="td${row},${col}"><form><input type="textarea" id="f${row},${col}"><input type="button" onclick="changedata(${row}, ${col})" value="Save"></form></td>`;
                }
                tableCode += `</tr>`;
            }
            tableCode += `</tbody></table>`;
            tableWrap.innerHTML = tableCode;
        }
        function changeBorderButton() {
            document.querySelector(`#chS`).value = `set ${document.getElementById(`chBS`).value}px ${document.getElementById(`chBT`).value}`;
        }
        function setBorder() {
            let tds = document.querySelectorAll(`#tableWrap td`);
            tds.forEach(td => {
                td.style = `border: ${document.getElementById(`chBS`).value}px ${document.getElementById(`chBT`).value}`;
            });
        }
        function changedata(row, col) {
            let data = document.getElementById(`f${row},${col}`).value;
            let td = document.getElementById(`td${row},${col}`);
            td.innerHTML = data;
        }
        function addTitle() {
            let caption = document.querySelectorAll(`#tableWrap caption`).length == 0 ? document.createElement(`caption`) : document.querySelectorAll(`#tableWrap caption`)[0];
            let table = document.querySelector(`#tableWrap table`);
            caption.innerHTML = document.querySelector(`#title`).value;
            table.insertBefore(caption, table.childNodes[0]);
        }
        function removeTr() {
            let trs = document.querySelectorAll(`#tableWrap tr`);
            if (document.querySelector(`#rmTr`).value >= trs.length) alert("Wrong row number!");
            else {
                let tr = trs[document.querySelector(`#rmTr`).value];
                tr.parentNode.removeChild(tr);
            }
        }
        function makeMagic() {
            let tds = document.querySelectorAll(`#tableWrap td`);
            let td = tds[Math.floor(Math.random() * tds.length)];
            if (!tds.length) return;
            if (Math.random() >= 0.5) {
                td.style.backgroundColor = randColor();
                td.style.color = randColor();
                td.style.fontSize = `${Math.floor(Math.random() * 10 + 15)}pt`;
            } else {
                let coords = td.id.split(`d`)[1];
                let row = +coords.split(`,`)[0];
                let col = +coords.split(`,`)[1];
                td.innerHTML = `<form><input type="textarea" id="f${row},${col}"><input type="button" onclick="changedata(${row}, ${col})" value="Save"></form>`;
            }
        }
        function randColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return `rgb(${r},${g},${b})`;
        }
        function removeTable() {
            let form = document.getElementById("form");
            form.style = "display: block";
            let fun = document.getElementById("Functions");
            fun.style = "display: none";
            let tableWrap = document.getElementById("tableWrap");
            tableWrap.innerHTML = "";
        }