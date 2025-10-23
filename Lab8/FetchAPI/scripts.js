document.getElementById("btn1").onclick = function () {
    this.disabled = true;
    fetch("https://itest.com.vn/lects/webappdev/fetch/data/").then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                for (let i = 0; i < data.length; i++) {
                    let r = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    c1.innerHTML = data[i].name;
                    c2.innerHTML = data[i].age;
                    c3.innerHTML = data[i].cars.length;
                    for (let j = 0; j < data[i].cars.length; j++)
                        c3.innerHTML += "<br>" + data[i].cars[j].name + " - " + data[i].cars[j].models;
                    r.appendChild(c1);
                    r.appendChild(c2);
                    r.appendChild(c3);
                    document.querySelector("#tbl1 tbody").appendChild(r);
                }
            });
        }
    });
};