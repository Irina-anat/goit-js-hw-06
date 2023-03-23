const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const li = document.createElement('li')
	li.className = 'item'
	li.textContent = ingredient
  liArray.push(li)
 // console.log(li);
})

list.append(...liArray)
console.log(list)


/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/



