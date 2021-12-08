var nameInput = document.querySelector('#nameInput')
var birthDay = document.querySelector('#birthDay')
var birthMonth = document.querySelector('#birthMonth')
var birthYear = document.querySelector('#birthYear')
var birthHour = document.querySelector('#hour')
var birthMinutes = document.querySelector('#minutes')
var textResult = document.querySelector('.containerResults p')

var bodyReverse = document.querySelector('.body')

var objDate = new Date()

var form = document.querySelector('form')
form.setAttribute('onsubmit', 'calculate(); return false')

function calculate() {
    var nameValue = nameInput.value
    //var nameFisrtLetter = nameValue.charAt(0).toUpperCase()
    
    var birthDayNumber = parseInt(birthDay.value)
    var birthMonthNumber = parseInt(birthMonth.value)
    var birthYearNumber = parseInt(birthYear.value)
    var birthHourNumber = parseInt(birthHour.value)
    var birthMinutesNumber = parseInt(birthMinutes.value)

    var systemDate = new Date(birthYearNumber, (birthMonthNumber - 1), birthDayNumber, birthHourNumber, birthMinutesNumber)  

    var millisecondsDifference = Math.abs(objDate.getTime() - systemDate.getTime())  
    var millisecondsDay = 24 * 60 * 60 * 1000
    var livedDays = (Math.floor(millisecondsDifference / millisecondsDay) - 1)

    if (birthYearNumber % 4 == 0 || (birthYearNumber % 100 == 0 && birthYearNumber % 400 == 0)) {
        var millisecondsYear = 24 * 60 * 60 * 1000 * 366
    } else {
        var millisecondsYear = 24 * 60 * 60 * 1000 * 365
    }       
    var livedYears = Math.floor(millisecondsDifference / millisecondsYear)

    var livedMonths = livedYears * 12 // confirmar se esse calculo precisa ou não de arrendondamento

    var millisecondsHour = 60 * 60 * 1000
    var livedHours = Math.floor(millisecondsDifference / millisecondsHour)
    
    var millisecondsMinutes = 60 * 1000
    var livedMinutes = Math.floor(millisecondsDifference / millisecondsMinutes)

    //bodyReverse.style.flexDirection='row-reverse'

    textResult.innerHTML = (nameValue + ", você tem " + livedYears + " anos, já viveu " + livedDays + " dias, " + livedMonths + " meses, " + livedHours +" horas e " + livedMinutes + " minutos!")
}




birthDay.addEventListener('input', function(){
    var replaced = birthDay.value.replace(/\D+/g, '')
    birthDay.value = replaced
})

//alert(Math.abs(objDate.getTime() - systemDate.getTime()))

//converter para milissegundos
    //alert(objDate.getTime())
    //alert(systemDate.getTime())

//alert(typeof(birthYearNumber))
    //window.alert(birthYearNumber)
    //alert('Dia: ' + birthDayNumber)
    //alert('Mês: ' + birthMonthNumber)

//alert(typeof(nameInput.value)) //- input name ok testado
    //alert(birthDay.value)  //- birth day ok testado
    //alert(typeof(birthMonth.value)) //- birth month ok testado retorna string
    //alert(birthYear.value) //- birth year ok testado
    //alert(birthHour. value + birthMinutes.value) - ok testado
    //alert(typeof(birthDayNumber))// retornou number ok
    //alert(typeof(birthMonthNumber))// retornou number ok
    //alert(typeof(birthYearNumber))// retornou number ok
    //alert(objDate);
    //var userBirthDate = new Date

//input de dinheiro
/*nameInput.addEventListener('input', function(){
    var replaced = nameInput.value.replace(/\D+/g, '')
    nameInput.value = new Intl.NumberFormat('pt-br', {
        style:'currency', currency:'BRL'}).format(replaced/100)
})*/
//minimumFractionDigits:2