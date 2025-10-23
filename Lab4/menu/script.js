sel_ = null;
function mouseClick(rw) {
    if (sel_ != null) {
        sel_.className = "tableTd";
    }
    sel_ = rw;
    sel_.className = "tableTdSelected";
    document.getElementById("content").innerHTML = sel_.innerHTML;
}

function tdMouseOut(r) {
    if (r != sel_) {
        r.className = 'tableTd';
    }
}

function tdMouseOver(r) {
    if (r != sel_) {
        r.className = 'tableTdHover';
    }
}