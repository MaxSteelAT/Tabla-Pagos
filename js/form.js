const matricula = document.querySelector('#school-enrollment')
const button = document.querySelector('#button')
const errorMessage = document.querySelector('#error-message')

const idMatricula = 1206486

button.addEventListener('click', function () {

  const numMatricula = parseFloat(matricula.value)

  if (numMatricula == "" || isNaN(numMatricula)) {
    errorMessage.textContent = 'Ingresa tu matricula.'
  } else if (numMatricula == idMatricula) {
    errorMessage.textContent = 'Matricula correcta'
    window.location.href = "pagos.html"

  } else {
    errorMessage.textContent = 'Matricula incorrecta'
  }

  matricula.value = ''
  matricula.focus()
})