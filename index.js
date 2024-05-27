const colorInput = document.getElementById('color-input')
const converterResult = document.getElementById('converter-result')
function converter(){
    converterResult.style.background = `#${colorInput.value}`
}
