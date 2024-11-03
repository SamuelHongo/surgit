// interfaz.js

// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtenemos los datos de usuario almacenados en localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
        alert("Inicio de sesión exitoso.");
        // Redirigir a la página principal o al panel de usuario
        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Función para manejar el registro de usuario
function register(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    const userData = { username, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
    window.location.href = "index.html"; // Redirigir a la página de inicio de sesión
}

// Asociar eventos a los formularios
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form[action='login.html']");
    const registerForm = document.getElementById("register-form");

    if (loginForm) loginForm.addEventListener("submit", login);
    if (registerForm) registerForm.addEventListener("submit", register);
});
