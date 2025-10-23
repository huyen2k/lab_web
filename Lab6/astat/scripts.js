// id

if (document.getElementById("di0_27945") != null) {
    document.getElementById("di0_27945").innerHTML = 0.75;
}
if (document.getElementById("di0_27930") != null) {
    document.getElementById("di0_27930").innerHTML = 0.25;
}
if (document.getElementById("di0_27931") != null) {
    document.getElementById("di0_27931").innerHTML = 0;
    document.getElementById("di0_27931").parentNode.style.color = "red";
}
if (document.getElementById("di0_27941") != null) {
    document.getElementById("di0_27941").innerHTML = 0.25;
}
if (document.getElementById("di0_27926") != null) {
    document.getElementById("di0_27926").innerHTML = 0.5;
}
if (document.getElementById("di0_27943") != null) {
    document.getElementById("di0_27943").innerHTML = 0.75;
}
if (document.getElementById("di0_27933") != null) {
    document.getElementById("di0_27933").innerHTML = 0.25;
}
if (document.getElementById("di0_27944") != null) {
    document.getElementById("di0_27944").innerHTML = 0.25;
}
if (document.getElementById("di0_27927") != null) {
    document.getElementById("di0_27927").innerHTML = 0.75;
}
if (document.getElementById("di0_27928") != null) {
    document.getElementById("di0_27928").innerHTML = 0.5;
}
if (document.getElementById("di0_27947") != null) {
    document.getElementById("di0_27947").innerHTML = 0.25;
}
if (document.getElementById("di0_27953") != null) {
    document.getElementById("di0_27953").innerHTML = 0;
    document.getElementById("di0_27953").parentNode.style.color = "red";
}
if (document.getElementById("di0_27962") != null) {
    document.getElementById("di0_27962").innerHTML = 0;
    document.getElementById("di0_27962").parentNode.style.color = "red";
}
if (document.getElementById("di0_27948") != null) {
    document.getElementById("di0_27948").innerHTML = 0.25;
}
if (document.getElementById("di0_27965") != null) {
    document.getElementById("di0_27965").innerHTML = 0.25;
}
if (document.getElementById("di0_27963") != null) {
    document.getElementById("di0_27963").innerHTML = 0.5;
}
if (document.getElementById("di0_27949") != null) {
    document.getElementById("di0_27949").innerHTML = 0.25;
}
if (document.getElementById("di0_27958") != null) {
    document.getElementById("di0_27958").innerHTML = 0.25;
}
if (document.getElementById("di0_27966") != null) {
    document.getElementById("di0_27966").innerHTML = 0.25;
}
if (document.getElementById("di0_27959") != null) {
    document.getElementById("di0_27959").innerHTML = 0.75;
}
if (document.getElementById("di0_27997") != null) {
    document.getElementById("di0_27997").innerHTML = 0;
    document.getElementById("di0_27997").parentNode.style.color = "red";
}
if (document.getElementById("di0_27984") != null) {
    document.getElementById("di0_27984").innerHTML = 0.75;
}
if (document.getElementById("di0_27998") != null) {
    document.getElementById("di0_27998").innerHTML = 0.25;
}
if (document.getElementById("di0_27985") != null) {
    document.getElementById("di0_27985").innerHTML = 0.25;
}
if (document.getElementById("di0_27993") != null) {
    document.getElementById("di0_27993").innerHTML = 0.5;
}
if (document.getElementById("di0_27989") != null) {
    document.getElementById("di0_27989").innerHTML = 0.25;
}
if (document.getElementById("di0_27980") != null) {
    document.getElementById("di0_27980").innerHTML = 0;
    document.getElementById("di0_27980").parentNode.style.color = "red";
}
if (document.getElementById("di0_27995") != null) {
    document.getElementById("di0_27995").innerHTML = 0.25;
}
if (document.getElementById("di0_27992") != null) {
    document.getElementById("di0_27992").innerHTML = 0.5;
}
if (document.getElementById("di0_28000") != null) {
    document.getElementById("di0_28000").innerHTML = 0;
    document.getElementById("di0_28000").parentNode.style.color = "red";
}
if (document.getElementById("di0_27994") != null) {
    document.getElementById("di0_27994").innerHTML = 0;
    document.getElementById("di0_27994").parentNode.style.color = "red";
}
if (document.getElementById("di0_28001") != null) {
    document.getElementById("di0_28001").innerHTML = 0.25;
}
if (document.getElementById("di0_27990") != null) {
    document.getElementById("di0_27990").innerHTML = -0.25;
    document.getElementById("di0_27990").parentNode.style.color = "red";
}
if (document.getElementById("di0_27987") != null) {
    document.getElementById("di0_27987").innerHTML = 0.25;
}
if (document.getElementById("di0_27996") != null) {
    document.getElementById("di0_27996").innerHTML = 0.25;
}

// load range
const minRange = document.getElementById('itest-min-range');
const maxRange = document.getElementById('itest-max-range');
const range = document.getElementById('itest-range');
const rangeValue = document.getElementById('itest-range-value');

function saveRangeToStorage(min, max) {
    localStorage.setItem('itest_range_min', min);
    localStorage.setItem('itest_range_max', max);
}

function loadRangeFromStorage() {
    const min = localStorage.getItem('itest_range_min');
    const max = localStorage.getItem('itest_range_max');
    return (min !== null && max !== null) ? [parseInt(min), parseInt(max)] : null;
}

function updateRange() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);

    if (max < min + 5) {
        if (event.target === minRange) {
            minRange.value = max - 5;
        } else {
            maxRange.value = min + 5;
        }
        min = parseInt(minRange.value);
        max = parseInt(maxRange.value);
    }

    const percent1 = (min / 100) * 100;
    const percent2 = (max / 100) * 100;

    range.style.left = percent1 + '%';
    range.style.width = (percent2 - percent1) + '%';
    rangeValue.textContent = `${min}% đến ${max}%`;
}

minRange.addEventListener('input', updateRange);
maxRange.addEventListener('input', updateRange);

const saved = loadRangeFromStorage();
if (saved) {
    const [min, max] = saved;
    minRange.value = min;
    maxRange.value = max;
}

updateRange();

function onRangeSelected(min, max) {
    const tbl = document.querySelectorAll("table.q-c");
    let c = 0;
    let c0 = 0;
    let okiec = 0;
    for (let i = 0; i < tbl.length; i++) {
        tbl[i].classList.add("okiedisplay");
        if (tbl[i].parentNode.parentNode.classList.contains("nodisplay-i")) {
            tbl[i].classList.add("nodisplay");
            tbl[i].classList.remove("okiedisplay");
            c0++;
        } else {
            let shit = tbl[i].querySelector("tr.stat td span.qus span.s-hit span:nth-of-type(2)");
            if (shit) {
                const percent = parseInt(shit.textContent.match(/(\d+)%/)[1], 10);
                if (percent < min || percent > max) {
                    tbl[i].classList.add("nodisplay");
                    tbl[i].classList.remove("okiedisplay");
                    c++;
                } else {
                    tbl[i].classList.remove("nodisplay");
                }
            }
        }
        if (tbl[i].classList.contains("okiedisplay")) {
            okiec++;
            tbl[i].querySelector("tr.h td:nth-of-type(1)").textContent = `Câu ${okiec}.`;
        }
    }
    saveRangeToStorage(min, max);
    document.querySelector("span.itest-no-c").textContent = `${tbl.length - c - c0}/${tbl.length - c0}`;
}

function handleChangeEnd() {
    const min = parseInt(minRange.value);
    const max = parseInt(maxRange.value);
    onRangeSelected(min, max);
}

minRange.addEventListener('change', handleChangeEnd);
maxRange.addEventListener('change', handleChangeEnd);

if (saved) {
    const [min, max] = saved;
    onRangeSelected(min, max);
} else {
    onRangeSelected(0, 100);
}

// filter
function addTQGFilter() {
    const rfg = document.querySelectorAll("h3.rfg:has(+ div.rfg table.q-c.okiedisplay)");
    if (rfg.length < 2)
        return;
    let sel = document.createElement("select");
    sel.classList.add("form-control");
    sel.style.width = "250px";
    sel.style.display = "inline";
    sel.style.position = "absolute";
    sel.style.right = "2.41rem";
    sel.style.top = "4.5rem";
    let opt = document.createElement("option");
    opt.value = "0";
    opt.textContent = "Tất cả phần thi";
    sel.appendChild(opt);
    document.querySelector("div#controlPanel").appendChild(sel);
    for (let i = 0; i < rfg.length; i++) {
        opt = document.createElement("option");
        opt.value = rfg[i].className.toString().replace(/[a-z\s\-]/gi, "");
        opt.textContent = rfg[i].textContent;
        sel.appendChild(opt);
    }
    sel.onchange = function () {
        const v = this.value;
        let items = document.querySelectorAll(":is(h3.rfg, div.rfg)");
        for (let i = 0; i < items.length; i++) {
            if (v == "0" || items[i].classList.contains("rfg-" + v)) {
                items[i].classList.remove("nodisplay");
                items[i].classList.remove("nodisplay-i");
            } else {
                items[i].classList.add("nodisplay");
                items[i].classList.add("nodisplay-i");
            }
        }
        const saved = loadRangeFromStorage();
        if (saved) {
            const [min, max] = saved;
            onRangeSelected(min, max);
        }
    }
        ;
}
addTQGFilter();