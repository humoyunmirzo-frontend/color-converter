const colorInput = document.getElementById('color-input')
const converterResult = document.getElementById('converter-result')
console.log(1)
function converter(){
    console.log(12)
    converterResult.style.background = `#${colorInput.value}`
}