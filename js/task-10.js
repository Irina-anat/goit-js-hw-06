function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const boxes = document.querySelector(`#boxes`);
const input = document.querySelector(`input`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
console.log(boxes)
console.log(input)
console.log(createBtn)
console.log(destroyBtn)

createBtn.addEventListener(`click`, onClick)

function onClick() {
	console.log(input.value)
	const boxesToAdd = [];
	for (let i = 0; i < Number(input.value); i += 1) {
		console.log(`Iteration number ${i}`);
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		boxesToAdd.push(div)
	} 
	return boxes.append(...boxesToAdd)	
}

destroyBtn.addEventListener(`click`, () =>
 boxes.innerHTML = ` `
)


/*boxes.innerHTML = ` `; очистити*/


/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.*/