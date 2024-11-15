document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримання значень з полів форми
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Перевірка заповненості всіх полів
    if (!name || !email || !message) {
      alert("Proszę wypełnić wszystkie pola.");
      return;
    }
    // Перенаправлення на сторінку подяки
    window.location.href = "./thank-you.html";
  });
