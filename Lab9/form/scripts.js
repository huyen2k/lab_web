
function masvKeyUp(e) {
    if (e.keyCode == 13) $("#hoten").focus();
}

function hotenKeyUp(e) {
    $("#loi_hoten").html("");
    if (e.keyCode == 13) $("#ngaysinh").focus();
}

function ngaysinhKeyUp(e) {
    if (e.keyCode == 13) $("#gioitinh").focus();
}

function gioitinhKeyUp(e) {
    if (e.keyCode == 13) $("#quequan").focus();
}

function hotenBlur() {
    $("#hoten").val(ChuanhoaTen($("#hoten").val()));
}

function chapnhan() {
    $("#loi_hoten").html("");
    $("#loi_masv").html("");
    $("#loi_ngaysinh").html("");
    if ($("#hoten").val() == "") {
        $("#loi_hoten").html("Chưa nhập họ tên.");
    }

    if ($("#masv").val() == "") {
        $("#loi_masv").html("Chưa nhập mã.");
    }

    if ($("#ngaysinh").val() != "") {
        if (!laNgayThang($("#ngaysinh").val()))
            $("#loi_ngaysinh").html("Ngày sinh không đúng.");
    }
}


$(document).ready(function () {
    //dat tam diem vao dôi tuong masv nay khi tai xong trang
    $("#masv").focus();

    //chuyen tam diem cho doi tuong tiep khi go Enter
    $("#masv").keyup(masvKeyUp);
    $("#hoten").keyup(hotenKeyUp);
    $("#ngaysinh").keyup(ngaysinhKeyUp);
    $("#gioitinh").keyup(gioitinhKeyUp);

    //xu ly su kien mat tam diem cua ho ten
    //... chuan hoa ten
    $("#hoten").blur(hotenBlur);

    //xu ly su kien bam nut chap nhan
    $("#btnchapnhan").click(chapnhan);
});