const table = document.getElementById("sampleTable");

    function insert_Row() {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = "New Cell1";

        const td2 = document.createElement("td");
        td2.innerHTML = "New Cell2";

        tr.append(td1, td2);

        // find tbody (browser creates one implicitly)
        const tbody = table.tBodies[0];

        // insert row before the first row in tbody
        tbody.insertBefore(tr, tbody.rows[0]);
    }