function getXmlHttpObject() {
    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        console.log(e)
    }
    return xmlHttp;
}

document.getElementById("btn1").onclick = function () {
    this.disabled = true;
    var xmlhttp = getXmlHttpObject();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4)
            document.getElementById("div1").innerHTML = this.responseText;
    };
    xmlhttp.open("GET", "https://itest.com.vn/lects/webappdev/ajax/abc.htm", true);
    xmlhttp.send(null);
};

/*
Access to XMLHttpRequest at 'https://itest.com.vn/lects/webappdev/ajax/abc.htm' 
from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
 header is present on the requested resource.
*/