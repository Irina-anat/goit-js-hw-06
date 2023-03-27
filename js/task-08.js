const form = document.querySelector(`.login-form`);
/*console.log(form)*/

form.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
 /* console.log(event)*/
  event.preventDefault();
 /* console.dir(event.currentTarget.elements)*/
  const { email, password } = event.currentTarget.elements;
  //console.log(email.value);
  //console.log(password.value)
  if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
  }

  const dataObject = {
    email: email.value,
    password: password.value
  }
  console.log(dataObject)
  form.reset();
}





/*Напиши скрипт управління формою логіна.


Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.*/