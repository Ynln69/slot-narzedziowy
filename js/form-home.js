document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const messageElement = document.getElementById('confirmation-message');
    messageElement.textContent = 'Wszystkie informacje zostaną przesłane na podany adres e-mail.';
  });
  