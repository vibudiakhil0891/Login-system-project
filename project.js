
/* ------------------------ script.js ------------------------ */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    let correctUser = "admin";
    let correctPass = "1234";

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
    } else if (user === correctUser && pass === correctPass) {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Incorrect username or password!";
    }
}

