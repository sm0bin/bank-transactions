document.getElementById("login").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == "mobin@gmail.com" && password == "pass") {
        // alert("Congratulations!");
        window.location.href = "./transactions.html";
    } else {
        alert("You don't have an account!");
        return;
    }
});


