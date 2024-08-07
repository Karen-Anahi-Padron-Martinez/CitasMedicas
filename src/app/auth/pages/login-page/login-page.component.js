document.getElementById('loginForm').addEventListener('submit', function(event) {
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Limpiar mensajes de error anteriores
  clearErrors();

  var valid = true;

  // Validar nombre de usuario o correo electrónico
  if (!username) {
    showError('email', 'Por favor, introduce tu nombre de usuario o correo electrónico.');
    valid = false;
  } else if (!validateEmail(username) && !validateUsername(username)) {
    showError('email', 'Por favor, introduce un nombre de usuario o correo electrónico válido.');
    valid = false;
  }

  // Validar contraseña
  if (!password) {
    showError('password', 'Por favor, introduce tu contraseña.');
    valid = false;
  } else if (password.length < 6) {
    showError('password', 'La contraseña debe tener al menos 6 caracteres.');
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateUsername(username) {
  // Aquí puedes agregar validaciones adicionales para el nombre de usuario si es necesario
  return true;
}

function showError(inputId, message) {
  var inputElement = document.getElementById(inputId);
  var errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.innerText = message;
  inputElement.parentNode.appendChild(errorElement);
}

function clearErrors() {
  var errors = document.querySelectorAll('.error-message');
  errors.forEach(function(error) {
    error.remove();
  });
}
