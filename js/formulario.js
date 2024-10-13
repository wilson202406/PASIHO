const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtén los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crea un objeto con los datos
    const data = {
        name: name,
        email: email,
        message: message
    };

    // Envío del correo (reemplaza con tu configuración real)
    fetch('https://api.example.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            // Mensaje de éxito y redirección
            alert('¡Mensaje enviado correctamente!');
            window.location.href = 'https://tupaginaweb.com/contacto'; // Reemplaza con la URL de tu página de contacto
        } else {
            alert('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ha ocurrido un error inesperado. Por favor, inténtalo nuevamente.');
    });
});
