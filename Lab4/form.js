document.getElementById("hoten").focus();

document.getElementById("hoten").onblur = function() {
	this.value = ChuanhoaTen(this.value);
};

document.getElementById("hoten").onkeyup = function(e) {
	DoKeyup(e, this, 'diachi');
};

document.getElementById("diachi").onkeyup = function(e) {
	DoKeyup(e, this, 'nam');
};

document.getElementById("nam").onkeyup = function(e) {
	DoKeyup(e, this, 'nu');
};

document.getElementById("nu").onkeyup = function(e) {
	DoKeyup(e, this, 'ngaysinh');
};

document.getElementById("ngaysinh").onkeyup = function(e) {
	DoKeyup(e, this, 'email');
};

document.getElementById("email").onkeyup = function(e) {
	DoKeyup(e, this, 'dienthoai');
};

document.getElementById("dienthoai").onkeyup = function(e) {
	DoKeyup(e, this, 'khoa1');
};

document.getElementById("khoa1").onkeyup = function(e) {
	DoKeyup(e, this, 'khoa2');
};	

document.getElementById("khoa2").onkeyup = function(e) {
	DoKeyup(e, this, 'khoa3');
};

document.getElementById("khoa3").onkeyup = function(e) {
	DoKeyup(e, this, 'username');
};

document.getElementById("username").onkeyup = function(e) {
	DoKeyup(e, this, 'pass');
};
document.getElementById("pass").onkeyup = function(e) {
	DoKeyup(e, this, 'repass');
};
document.getElementById("repass").onkeyup = function(e) {
	DoKeyup(e, this, 'ghichu');
};

function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}

function Chapnhan() {
	var okie = true; //chua co loi
	//xoa cac thong bao loi
	document.getElementById("loi_hoten").innerHTML  = "";
	document.getElementById("loi_ngaysinh").innerHTML = "";
	document.getElementById("loi_email").innerHTML = "";
	document.getElementById("loi_username").innerHTML = "";
	document.getElementById("loi_pass").innerHTML = "";
	document.getElementById("loi_repass").innerHTML = "";

    //kiem tra cac truong bat buoc nhap
	if (document.getElementById("pass").value == "") {
		document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
		document.getElementById("pass").focus();
		okie = false;
	} else if (document.getElementById("repass").value == "") {
		document.getElementById("loi_repass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
		document.getElementById("repass").focus();
		okie = false;
	} else if (document.getElementById("pass").value  != document.getElementById("repass").value ) {
		document.getElementById("loi_pass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
		document.getElementById("pass").focus();
		okie = false;
	}

	if (document.getElementById("username").value == "") {
		document.getElementById("loi_username").innerHTML = "Quý vị chưa nhập tên sử dụng";
		document.getElementById("username").focus();
		okie = false;
	} else if (!laTenSD(document.getElementById("username").value)) {
		document.getElementById("loi_username").innerHTML = "Tên sử dụng không đúng định dạng";
		document.getElementById("username").focus();
		okie = false;
	}

	if (document.getElementById("email").value == "") {
		document.getElementById("loi_email").innerHTML = "Quý vị chưa nhập e-mail";
		document.getElementById("email").focus();
		okie = false;
	} else if (!laEmail(document.getElementById("email").value)) 				{
		document.getElementById("loi_email").innerHTML = "E-mail không đúng định dạng";
		document.getElementById("email").focus();
		okie = false;
	}

	if (document.getElementById("ngaysinh").value == "") {
		document.getElementById("loi_ngaysinh").innerHTML = "Quý vị chưa nhập ngày sinh";
		document.getElementById("ngaysinh").focus();
		okie = false;
	} else if (!laNgayThang(document.getElementById("ngaysinh").value)) {
		document.getElementById("loi_ngaysinh").innerHTML = "Ngày sinh không đúng định dạng";
		document.getElementById("ngaysinh").focus();
		okie = false;
	}


	if (document.getElementById("hoten").value == "") {
		document.getElementById("loi_hoten").innerHTML = "Quý vị chưa nhập họ tên";
		document.getElementById("hoten").focus();
		okie = false;
	}

	//neu tất cả các dữ liệu được nhập đúng đắn
	//submit form
	if (okie) document.getElementById("form1").submit();
}

//kiem tra s la email hay khong
function laEmail(s) {
	return true;
}

//kiem tra s la ten su dung hop le hay khong
function laTenSD(s) {
	return true;
}

function laNgayThang(d) { //d = nn/tt/nnnn
    //kiem tra d co phai la ngay thang
	//tach xau d boi dau /
	s = d.split('/');

	if (s.length != 3) return false; //phai co 3 phan
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

	//chuyen thanh cac so nguyen
	ngay = parseInt(s[0]);
	thang = parseInt(s[1]);
	nam = parseInt(s[2]);

	//kiem tra
	if (thang > 12 || thang < 1) return false;
	if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
		if (ngay > 31) return false;
	} else if (thang == 2){
		if (nam%4 == 0 && nam%100 != 0) {
			if (ngay > 29) return false;
		} else if (ngay > 28) return false;
	} else if (ngay > 30) return false;

	if (ngay < 1) return false;

	date = new Date();
	if (nam > date.getFullYear() || nam < 1950) return false;

	return true;
}


//chuan hoa ten
function ChuanhoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

//bam nut bo qua
function Boqua() {
	document.location.href = "../";
}

// hien thi anh chan dung
document.getElementById("FileUpload1").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
        preview.classList.remove("nodisplay");
    }
};


document.addEventListener("DOMContentLoaded", function() {
    // Lấy các nút
    var chapnhanBtn = document.getElementById("chapnhanBtn");
    var boquaBtn = document.getElementById("boquaBtn");

    chapnhanBtn.addEventListener("click", function() {
        Chapnhan();
    });

    boquaBtn.addEventListener("click", function() {
        Boqua();
    });
});
