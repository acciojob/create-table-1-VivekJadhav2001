const btn = document.getElementById("button")
        const table = document.getElementById("sampleTable")

        let count = 1;

        function insert_Row() {
            //Write your code here

            const tr = document.createElement("tr")
            const td1 = document.createElement("td")
            td1.innerHTML = `New Cell${count}`

            count++

            const td2 = document.createElement("td")
            td2.innerHTML = `New Cell${count}`

            console.log(td1,td2, "Td for New Row")

            tr.append(td1,td2)

            table.insertBefore(tr,table.firstChild)

        }
