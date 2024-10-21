const paymentInput = document.querySelector('#payment')
const addPaymentButton = document.querySelector('#add-payment')
const showChartButton = document.querySelector('#show-chart')
const totalPaymentsSpan = document.querySelector('#total-payments')
const chart = document.querySelector('#chart')


let payments = []

const months = [
	'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

addPaymentButton.addEventListener('click', function() {
  // Validar si ya son mas de 12 pagos.
  if (payments.length === 12) {
  	alert('Ya se agregaron los 12 pagos.')
    return;
  }

	// Obtuve el valor y convertir a flotante.
	const payment = parseFloat(paymentInput.value)
  // Valide el campo.
  if (payment === 0 || isNaN(payment)) {
  	alert('Agrega una cantidad valida.')
    return;
  }
  
  // payments []

  payments.push(payment)

  // [5] length 1 / Enero
  // [5, 6] length 2 /  Febrero

  
  switch (payments.length) {
    case 1:
      /*document.querySelector('#january').textContent = "Pagado"*/ 
      document.querySelector('#january').innerHTML = `
        <div class="img">
          <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;" style="text-align: center;">    
        </div>
    `; 
      break;
    
    case 2:
      document.querySelector('#february').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;" text-align="center" style="text-align: center;">    
      </div>
    `;
      break;

    case 3:
      document.querySelector('#march').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;
    
    case 4:
      document.querySelector('#april').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 5:
      document.querySelector('#may').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 6:
      document.querySelector('#june').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;
      
    case 7:
      document.querySelector('#july').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 8:
      document.querySelector('#august').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt=""style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 9:
    document.querySelector('#september').innerHTML = `
    <div class="img" style="width: 100px; height: 100px;">
      <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt=""style="width: 100px; height: 100px;">    
    </div>
`;
    break;

    case 10:
      document.querySelector('#october').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 11:
      document.querySelector('#november').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt=""style="width: 100px; height: 100px;">    
      </div>
  `;
      break;

    case 12:
      document.querySelector('#december').innerHTML = `
      <div class="img" style="width: 100px; height: 100px;">
        <img src="https://thumbs.dreamstime.com/z/vector-de-ilustraci%C3%B3n-sello-pagado-goma-en-tinta-verde-h%C3%BAmeda-el-es-para-etiquetar-comercio-negocios-la-imagen-est%C3%A1-fondo-216414024.jpg" alt="" style="width: 100px; height: 100px;">    
      </div>
  `;      break;
    
      default:
      break;
  }
  
  paymentInput.value = ''
	
  paymentInput.focus()
  
  totalPaymentsSpan.textContent = payments.length
})

showChartButton.addEventListener('click', function () {
  if (payments.length < 12) {
    alert('Agrega los 12 pagos para graficar.')
    return;
  }

  
  // Crear gráfica
  new Chart(chart, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Pagos de los meses.',
        data: payments,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
})
