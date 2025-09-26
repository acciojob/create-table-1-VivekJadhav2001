const btn = document.getElementById("button")
        const table = document.getElementById("sampleTable")


        function insert_Row() {
            //Write your code here

            const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = "New Cell1";

    const td2 = document.createElement("td");
    td2.innerHTML = "New Cell2";

    tr.append(td1, td2);

    // Insert at the very top (before the first <tr>)
    table.insertBefore(tr, table.rows[0]);

        }
