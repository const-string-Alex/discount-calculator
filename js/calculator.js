const submitBtn = document.getElementById("submit-btn")
const clearBtn = document.getElementById("clear-btn")
// result
const discountResult = document.getElementById("discount-result")
const savingsResult = document.getElementById("savings-result")

function setUnsetGreen(whatever) {
    if (whatever === 1) {
        discountResult.classList.add("green")
        savingsResult.classList.add("green")
    } else {
        discountResult.classList.remove("green")
        savingsResult.classList.remove("green")
    }
}

function calculateDiscount() {
    // get data
    const calculatorForm = document.getElementById("calculator-form")
    const percent = calculatorForm.elements["percent"].value
    const price = calculatorForm.elements["price"].value

    // calculate
    const discount = (percent / 100) * price
    // round 2 decimal places
    const savings = Math.round(discount * 100) / 100

    // change values
    discountResult.textContent = `$${price - savings}`
    savingsResult.textContent = `$${savings}`

    setUnsetGreen(1)
}

function clearData() {
    document.getElementById("calculator-form").reset()
    discountResult.textContent = "---"
    savingsResult.textContent = "---"
    
    setUnsetGreen(0)
}

// buttons
submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    calculateDiscount()
})
clearBtn.addEventListener("click", clearData)