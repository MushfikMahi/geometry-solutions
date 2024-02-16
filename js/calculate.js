function calculateTriangleArea() {
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)

    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)

    const triangle = 0.5 * base * height;

    const triangleResul = document.getElementById('triangle-result');
    triangleResul.innerText = triangle;
    //     baseInput.value = '';
    //     heightInput.value = '';
}
function calculateRectangleArea() {
    const widthInput = document.getElementById('rectangle-width');
    const widhtText = widthInput.value;
    const width = parseFloat(widhtText)

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)

    const rectangle = width * length;

    const rectangleResul = document.getElementById('rectangle-result');
    rectangleResul.innerText = rectangle;
    //     baseInput.value = '';
    //     heightInput.value = '';
}

// this is reusable function ------------------------------------------------------------
// basic function 
function inputFields(Idys) {
    const inputField = document.getElementById(Idys);
    const inputText = inputField.value;
    const values = parseFloat(inputText);
    return values
}
function changeInnerText(result, area) {
    const changingText = document.getElementById(result);
    changingText.innerText = area;
}
// pentagon
function calculatePentagonArea() {
    const perimeter = inputFields('pentagon-perimeter');
    const apothem = inputFields('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    changeInnerText('pentagon-result', area)
}
// rhombus
function calculateRhombusArea() {
    const diagonal1 = inputFields('rhombus-diagonal1');
    const diagonal2 = inputFields('rhombus-diagonal2');
    const area = 0.5 * diagonal1 * diagonal2;
    changeInnerText('rhombus-result', area)
}
// ellips
function calculateEllipseArea() {
    const majorRedious = inputFields('ellipse-major');
    const minorRedious = inputFields('ellipse-minor');
    const area = 3.1416 * majorRedious * minorRedious;
    changeInnerText('ellipse-result', area)
}
// Parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-result', area);
}