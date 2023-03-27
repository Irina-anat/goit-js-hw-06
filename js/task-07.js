const inputValue = document.querySelector(`#font-size-control`)
const textValue = document.querySelector(`#text`)
console.dir(inputValue)
console.dir(textValue)


inputValue.addEventListener("input", onInput)

function onInput(event) {
    textValue.style.fontSize = event.currentTarget.valueAsNumber + "px"
    console.log(event.currentTarget.valueAsNumber)
}




/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>*/