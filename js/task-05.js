
const textInput = document.querySelector(`#name-input`);
console.log(textInput)
const outPut = document.querySelector(`#name-output`);
console.log(outPut)

textInput.addEventListener('input', onInput)

function onInput(event) {
	outPut.textContent = event.currentTarget.value;

	if (!event.currentTarget.value/* === ''*/) {
		outPut.textContent = 'Anonymous';
	}
}
console.log(textInput)
console.log(outPut)
        
    


/*Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/