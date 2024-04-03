function loginverification() {
    let username =
    documnet.getelementbyid("username").value;
    let password =
    document.getelementbyid("password").value;
    if (username == "admin && password" == "admin"){
        window.alert("Login Berhasil");
        window.location="pages/menu.html";
    }
    else if (username == "" || password == ""){
        window.alert("Masukkan Email Atau passowrd");
    }
    else {
        window.alert("Login Gagal");
    }
}

function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

function DarkMode(){
    document.body.style.backgroundColor="black";
    document.getElementById("h1").style.color="white";
}