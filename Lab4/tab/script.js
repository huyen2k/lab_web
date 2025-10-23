sel = null

function mouseOver(r) {
    if (r != sel) r.className = "tab_hover"
}

function mouseOut(r) {
    if (r != sel) r.className = "tab_nom"
}

function mouseClick(r) {
    if (sel != null) sel.className = "tab_nom"
    sel = r
    sel.className = "tab_select"

    frm = document.getElementById("web_frame")
    if (sel.id = "v1")
        frm.src = "https://vnexpress.net/"
    else if (sel.id = "v2")
        frm.src = "https://dantri.com.vn/"
    else if (sel.id = "v3")
        frm.src = "https://www.voanews.com/"
    else if (sel.id = "v4")
        frm.src = "https://znews.vn/"
}