function validateLogin() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return false;
    }
    return true;
}

function validateRegister() {
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return false;
    }
    if (password.length < 4) {
        alert("Password must be at least 4 characters long!");
        return false;
    }
    return true;
}
