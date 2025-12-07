const slider = document.querySelector(".slider")
const lenNum = document.querySelector("#lennum")
const upperCase = document.querySelector("#upper")
const lowerCase = document.querySelector("#lower")
const numberCheck = document.querySelector("#num")
const symbolCheck = document.querySelector("#symbol")
const generateBtn = document.querySelector(".generatebtn")
const newPass = document.querySelector("#newpass")
const copyBtn = document.querySelector(".copybtn")
const strengthLight = document.querySelector("#ligth")

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "!@#$%^&*()_+-={}|[]:;"

// ✅ Slider Value
lenNum.innerText = slider.value
slider.addEventListener("input", () => {
    lenNum.innerText = slider.value
})

// ✅ Generate Password
generateBtn.addEventListener("click", () => {
    let charset = ""
    let password = ""

    if (upperCase.checked) charset += upperSet
    if (lowerCase.checked) charset += lowerSet
    if (numberCheck.checked) charset += numberSet
    if (symbolCheck.checked) charset += symbolSet

    if (charset.length === 0) {
        alert("Please select at least one option")
        return
    }

    for (let i = 0; i < slider.value; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }

    newPass.innerText = password
    checkStrength()
})

// ✅ Copy Button
copyBtn.addEventListener("click", () => {
    if (newPass.innerText !== "") {
        navigator.clipboard.writeText(newPass.innerText)
        alert("Password Copied!")
    }
})

// ✅ Strength Indicator
function checkStrength() {
    let strength = 0

    if (upperCase.checked) strength++
    if (lowerCase.checked) strength++
    if (numberCheck.checked) strength++
    if (symbolCheck.checked) strength++

    if (slider.value >= 12) strength++

    if (strength <= 2) {
        strengthLight.style.background = "red"
    } else if (strength <= 4) {
        strengthLight.style.background = "orange"
    } else {
        strengthLight.style.background = "green"
    }
}
