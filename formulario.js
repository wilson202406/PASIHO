document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (event) => {

            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Evita el envío del formulario por defecto

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

                // Aquí es donde se enviaría el correo
                // Utilizando un servicio como SendGrid, Mailgun o la API de Gmail
                // Ejemplos:
                // - Enviar con SendGrid: https://docs.sendgrid.com/api-reference/mail-send
                // - Enviar con Mailgun: https://documentation.mailgun.com/en/latest/api-intro.html

                // Ejemplo básico (no funcional sin configuración):
                const url = 'https://api.example.com/dannasofiacp12@gmail.com'; // Reemplaza con tu URL
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.ok) {
                            alert('Mensaje enviado correctamente');
                            window.location.href = 'contactanos.html'; // Reemplaza con la URL de tu página de contacto
                            form.reset();
                        } else {
                            alert('Error al enviar el mensaje');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Ha ocurrido un error inesperado. Por favor, inténtalo nuevamente.');
                    });
            });


        });
    } else {
        //console.error('El elemento con ID "contactForm" no se encontró.');
    }
});

