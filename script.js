var characterRange = document.getElementById("characterRange")
var characterNumber = document.getElementById("characterNumber")
var characterSymbols = document.getElementById("includeSymbols")
var characterUppercase = document.getElementById("includeUppercase")
var characterNumbers = document.getElementById("includeNumbers")
var form = document.getElementById("generator")
var upperCaseCodes = arrayLowHigh(65, 90)
var lowerCaseCodes = arrayLowHigh(97, 122)
var numberCaseCodes = arrayLowHigh(48, 57)
var symbolCaseCodes = arrayLowHigh(33, 47).concat(arrayLowHigh(58, 64)).concat(arrayLowHigh(91,96)).concat(arrayLowHigh(123, 126))
var passDisplay = document.getElementById("passDisplay")

function arrayLowHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
    array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
var value = e.target.value
characterNumber.value = value
characterRange.value = value
}


characterRange.addEventListener("input", syncCharacterAmount)
characterNumber.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e => {
    e.preventDefault()
    var includeNumbers = characterNumber.checked
    var includeSymbols = characterSymbols.checked
    var includeUppercase = characterUppercase.checked
    var characterAmount = characterNumber.value
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passDisplay.innertext = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = lowerCaseCodes
    if (includeUppercase) charCodes = charCodes.concat(upperCaseCodes)
    if (includeNumbers) charCodes = charCodes.concat(characterNumbers)
    if (includeSymbols) charCodes = charCodes.concat(characterSymbols)

    var passwordCharacters = []
    for(let i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
}

