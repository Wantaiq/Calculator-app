//Numbers
const numberButton = document.querySelectorAll('[data-key');
//Operations
const operationButtons = document.querySelectorAll('[data-operation]');
//Delete 1 button
const deleteButton = document.querySelector('[data-delete]');
//Reset button
const resetButton = document.querySelector('[data-reset]');
// Calculate Button
const equalButton = document.querySelector('[data-calculate');
//Previous operation display 
const previousOperationTextElement = document.querySelector('.previous-operations');
//Current operation display
const currentOperationTextElement = document.querySelector('.current-operations');
// Operation element
const operationTextElement = document.querySelector(".operation")
let number;
let operation;
let currentOperation = ''
let previousOperation = ''

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if(currentOperation.includes(".") && button.value === "."){
            return
        }
        number = button.value;
        currentOperation += number
        renderDisplay()
    })
});



operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operation = button.value
        operationCalculations();
        renderDisplay()
    })
});

/*  ------ Calculations ------- */

function operationCalculations() {
    let result;
    number = ""
    const current = parseFloat(currentOperation);
    const previous = parseFloat(previousOperation);
    
        if(!currentOperation) {
            return
        } else if(previousOperation === "") {
            previousOperation = `${currentOperation}`
            currentOperation = ""
        } else if(operation === "+") {
            result = previous + current;
            currentOperation = ""
            previousOperation = `${result}`
        } else if (operation === "-") {
                result = previous - current
                currentOperation = ""
                previousOperation = `${result}`
        } else if (operation === "/") {
                result = previous / current 
                currentOperation = ""
                previousOperation =  `${result}`
        } else if (operation === "*") {
                result = previous * current
                currentOperation = ""
                previousOperation = `${result}`
        }
    }


function calculate() {
    const current = parseFloat(currentOperation);
    const previous = parseFloat(previousOperation);

    if (!currentOperation || !previousOperation) {
        return
    }
    previousOperation = eval(`${previous} ${operation} ${current}`)
    currentOperation = ''
}

equalButton.addEventListener('click', () => {
    calculate()
    renderDisplay()
})


/* ---- Delete Last Input ----- */
deleteButton.addEventListener('click', () => {
    deleteLastNumber()
    renderDisplay()
})

function deleteLastNumber() {
    currentOperation = currentOperation.toString().slice(0, -1);
}

/* ----- Reset Everything ---- */
resetButton.addEventListener('click', () => {
    currentOperation = ""
    previousOperation = ""
    number = ""
    operation = ""
    renderDisplay()
})


/* ------ Render Display ------ */

function renderDisplay() {
    currentOperationTextElement.textContent = currentOperation
    previousOperationTextElement.textContent = previousOperation
    operationTextElement.textContent = operation;
}


/* toggle theme buttons */ 

const toggleButtons = document.querySelectorAll(".toggle-buttons")


class Theme{
    constructor(bodyBackground, keypadBackground, screenBackground, mainFontColor, delResetEqualFontColor, deleteResetBackgrondColor, deleteResetShadow, 
        equalColor, equalShadow, keyBackgroundColor, keyShadow, keyFontColor, equalFontColor){
            this.bodyBackground = bodyBackground;
            this.keypadBackground = keypadBackground;
            this.screenBackground = screenBackground;
            this.mainFontColor = mainFontColor;
            this.delResetEqualFontColor = delResetEqualFontColor;
            this.deleteResetBackgrondColor = deleteResetBackgrondColor;
            this.deleteResetShadow = deleteResetShadow;
            this.equalColor = equalColor;
            this.equalShadow = equalShadow;
            this.keyBackgroundColor = keyBackgroundColor;
            this.keyShadow = keyShadow;
            this.keyFontColor = keyFontColor
            this.equalFontColor = equalFontColor
        }
}


const lightTheme = new Theme("hsl(0, 0%, 90%)", "hsl(0, 5%, 81%)","hsl(0, 0%, 93%)","hsl(60, 10%, 19%)", "hsl(0, 0%, 100%)","hsl(185, 42%, 37%)", 'hsl(185, 58%, 25%)',"hsl(25, 98%, 40%)", "hsl(25, 99%, 27%)","hsl(45, 7%, 89%)","hsl(35, 11%, 61%)", "hsl(60, 10%, 19%)", "hsl(0, 0%, 100%")
const purpleTheme = new Theme("hsl(268, 75%, 9%)","hsl(268, 71%, 12%)", "hsl(268, 71%, 12%)","hsl(52, 100%, 62%)","hsl(0, 0, 100%)", "hsl(281, 89%, 26%)", "hsl(285, 91%, 52%)","hsl(90, 100%, 80%)","hsl(177, 92%, 70%)","hsl(268, 47%, 21%)","hsl(290, 70%, 36%)", "hsl(52, 100%, 62%)", "hsl(268, 71%, 12%)")
const defaultTheme = new Theme("hsl(222, 26%, 31%)","hsl(223, 31%, 20%)","hsl(224, 36%, 15%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(225, 21%, 49%)","hsl(224, 28%, 35%)", "hsl(6, 63%, 50%)", "hsl(6, 70%, 34%)", "hsl(30, 25%, 89%)", "hsl(28, 16%, 65%)", "hsl(60, 10%, 19%)", "hsl(0, 0%, 100%")
const keypad = document.querySelector(".keyboard")
const numKeys = document.querySelectorAll(".key")
const delKey = document.querySelector(".del")
const resetKey = document.querySelector(".reset")
const equalKey = document.querySelector(".equal")
const screen = document.querySelector(".screen")

function changeTheme() {
    if(toggleButtons[0].checked) {
        setDefaultTheme()
    } else if(toggleButtons[1].checked) {
        setLightTheme()
    } else if(toggleButtons[2].checked){
        setPurpleTheme()
    }
}

toggleButtons.forEach(button => {
    button.addEventListener('click', changeTheme)
})

function setLightTheme() {
    document.body.style.backgroundColor = lightTheme.bodyBackground;
    keypad.style.backgroundColor = lightTheme.keypadBackground;
    numKeys.forEach(num => {
        num.style.backgroundColor = lightTheme.keyBackgroundColor
        num.style.color = lightTheme.keyFontColor
        num.style.borderColor= lightTheme.keyShadow;
    });
    delKey.style.backgroundColor = lightTheme.deleteResetBackgrondColor;
    delKey.style.borderColor = lightTheme.deleteResetShadow;
    resetKey.style.backgroundColor = lightTheme.deleteResetBackgrondColor;
    resetKey.style.borderColor = lightTheme.deleteResetShadow
    equalKey.style.backgroundColor = lightTheme.equalColor;
    equalKey.style.borderColor = lightTheme.equalShadow;
    equalKey.style.color = lightTheme.equalFontColor;
    document.body.style.color = lightTheme.mainFontColor;
    screen.style.backgroundColor = lightTheme.screenBackground;

}
function setPurpleTheme() {
    document.body.style.backgroundColor = purpleTheme.bodyBackground;
    keypad.style.backgroundColor = purpleTheme.keypadBackground;
    numKeys.forEach(key => {
        key.style.backgroundColor = purpleTheme.keyBackgroundColor
        key.style.color = purpleTheme.keyFontColor
        key.style.borderColor = purpleTheme.keyShadow
    });
    delKey.style.backgroundColor = purpleTheme.deleteResetBackgrondColor;
    delKey.style.borderColor = purpleTheme.deleteResetShadow;
    resetKey.style.backgroundColor = purpleTheme.deleteResetBackgrondColor;
    resetKey.style.borderColor = purpleTheme.deleteResetShadow;
    equalKey.style.backgroundColor = purpleTheme.equalColor;
    equalKey.style.color = purpleTheme.equalFontColor
    equalKey.style.borderColor = purpleTheme.equalShadow;
    document.body.style.color = purpleTheme.mainFontColor;
    screen.style.backgroundColor = purpleTheme.screenBackground;
}

function setDefaultTheme() {
    document.body.style.backgroundColor = defaultTheme.bodyBackground;
    keypad.style.backgroundColor = defaultTheme.keypadBackground;
    numKeys.forEach(key => {
        key.style.backgroundColor = defaultTheme.keyBackgroundColor
        key.style.color = defaultTheme.keyFontColor
        key.style.borderColor = defaultTheme.keyShadow
    });
    delKey.style.backgroundColor = defaultTheme.deleteResetBackgrondColor;
    delKey.style.borderColor = defaultTheme.deleteResetShadow;
    resetKey.style.backgroundColor = defaultTheme.deleteResetBackgrondColor;
    resetKey.style.borderColor = defaultTheme.deleteResetShadow;
    equalKey.style.backgroundColor = defaultTheme.equalColor;
    equalKey.style.color = defaultTheme.equalFontColor
    equalKey.style.borderColor = defaultTheme.equalShadow;
    document.body.style.color = defaultTheme.mainFontColor;
    screen.style.backgroundColor = defaultTheme.screenBackground;
}

