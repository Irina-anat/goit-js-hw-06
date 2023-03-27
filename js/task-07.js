const inputControl = document.querySelector(`#font-size-control`)
const textValue = document.querySelector(`#text`)
console.dir(inputControl)
console.dir(textValue)


inputControl.addEventListener("input", onInput)

textValue.style.fontSize = `${inputControl.value}px`;

function onInput(event) {
   const fontSize = `${event.currentTarget.valueAsNumber}px`;
   console.log(event.currentTarget.valueAsNumber)
   textValue.style.fontSize = fontSize;
   console.log(textValue.style.fontSize)
}








/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>*/