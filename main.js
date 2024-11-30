// Login Logic
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const mobile = document.getElementById("mobile").value;
    if (mobile.length === 10) {
        localStorage.setItem("user", mobile);
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
});

// Redirect if not logged in
if (!localStorage.getItem("user")) {
    if (window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
}
