
const textInput = document.querySelector(`#validation-input`);
console.log(textInput)
const lengthWorld = Number(textInput.getAttribute('data-length'));
/*console.log(lengthWorld)*/


textInput.addEventListener('blur', onInput)

function onInput(event) {
  console.log(event)
  console.log(textInput.value.length)
  console.log(lengthWorld)

  if (textInput.value.length === lengthWorld) {

    textInput.classList.add("valid");
    textInput.classList.remove("invalid");

  } else {textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
 



/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}*/