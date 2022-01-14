var nameInput = document.querySelector('#nameInput')
var birthDay = document.querySelector('#birthDay')
var birthMonth = document.querySelector('#birthMonth')
var birthYear = document.querySelector('#birthYear')
var birthHour = document.querySelector('#hour')
var birthMinutes = document.querySelector('#minutes')
var textResult = document.querySelector('.containerResults p')

const BUTTON = document.querySelector('#button') 
var objDate = new Date()

BUTTON.addEventListener('click', function () {
    let nameValue = nameInput.value    
    let birthDayNumber = parseInt(birthDay.value)
    let birthMonthNumber = parseInt(birthMonth.value)
    let birthYearNumber = parseInt(birthYear.value)
    let birthHourNumber = parseInt(birthHour.value)
    let birthMinutesNumber = parseInt(birthMinutes.value)

    let systemDate = new Date(birthYearNumber, (birthMonthNumber - 1), birthDayNumber, birthHourNumber, birthMinutesNumber)  

    let millisecondsDifference = Math.abs(objDate.getTime() - systemDate.getTime())  
    let millisecondsDay = 24 * 60 * 60 * 1000
    let livedDays = Math.floor(millisecondsDifference / millisecondsDay)

    if (birthYearNumber % 4 == 0 || (birthYearNumber % 100 == 0 && birthYearNumber % 400 == 0)) {
        let millisecondsYear = 24 * 60 * 60 * 1000 * 366
    } else {
        let millisecondsYear = 24 * 60 * 60 * 1000 * 365
    }       
    let livedYears = Math.floor(millisecondsDifference / millisecondsYear)

    let livedMonths = livedYears * 12 // confirmar se esse calculo precisa ou não de arrendondamento

    let millisecondsHour = 60 * 60 * 1000
    let livedHours = Math.floor(millisecondsDifference / millisecondsHour)
    
    let millisecondsMinutes = 60 * 1000
    let livedMinutes = Math.floor(millisecondsDifference / millisecondsMinutes)

    //bodyReverse.style.flexDirection='row-reverse'

    textResult.innerHTML = (nameValue + ", você tem " + livedYears + " anos, já viveu " + livedDays + " dias, " + livedMonths + " meses, " + livedHours +" horas e " + livedMinutes + " minutos!")
})

/* function calculate() {
    
} */

/*.....Not allow numbers in name input*/
nameInput.addEventListener('keypress', function(e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which)
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault()
    }
})

/*.....Regex for only numbers.....*/
/*!!!TRY TO REDUCE THIS CODE BELOW FOR THE NEXT VERSION!!!*/
birthDay.addEventListener('input', function(){
    let replaced = birthDay.value.replace(/\D+/g, '')
    birthDay.value = replaced
})

birthMonth.addEventListener('input', function(){
    let replaced = birthMonth.value.replace(/\D+/g, '')
    birthMonth.value = replaced
})

birthYear.addEventListener('input', function(){
    let replaced = birthYear.value.replace(/\D+/g, '')
    birthYear.value = replaced
})

birthHour.addEventListener('input', function(){
    let replaced = birthHour.value.replace(/\D+/g, '')
    birthHour.value = replaced
})

birthMinutes.addEventListener('input', function(){
    let replaced = birthMinutes.value.replace(/\D+/g, '')
    birthMinutes.value = replaced
})