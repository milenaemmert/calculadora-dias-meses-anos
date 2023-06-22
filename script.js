document.querySelector('form').addEventListener('submit', calculateLifeTime)
let shouldUpdateResult = false

function calculateLifeTime(e) {
  if(e) e.preventDefault()
  shouldUpdateResult = true
  
  const birthDateInput = document.querySelector('#birthDate').value
  const birthTimeInput = document.querySelector('#birthTime').value

  const birthDate = new Date(birthDateInput + ' ' + birthTimeInput)
  const currentDate = new Date()
  const milliseconds = currentDate - birthDate
  
  const seconds = Math.floor(milliseconds/1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30.436)
  const years = Math.floor(months / 12)

  document.querySelector('.result__text').innerHTML = `Você tem ${years} anos, já viveu por ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`

  startLifeTimeCalculationLoop()
}

function startLifeTimeCalculationLoop() {
  setTimeout(() => {
    if(shouldUpdateResult) {
      calculateLifeTime()
    }
  }, 1000)
}