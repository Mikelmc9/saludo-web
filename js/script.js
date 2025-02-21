document.getElementById('btnSaludar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() !== "") {
        document.getElementById('mensaje').textContent = `¡Hola, ${nombre}! Bienvenido.`;
    } else {
        document.getElementById('mensaje').textContent = "Por favor, introduce tu nombre.";
    }
});