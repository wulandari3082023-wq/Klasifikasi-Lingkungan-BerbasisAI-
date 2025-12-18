function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    // Login sederhana (contoh)
    if (username === "admin" && password === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    } else {
        message.style.color = "red";
        message.innerText = "Username atau password salah!";
    }
}

function logout() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginMessage").innerText = "";
}
