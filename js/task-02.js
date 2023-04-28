// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const list = document.body.querySelector("#ingredients");
const listItems = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  listItems.push(listItem);
});
// console.log("li: ", listItems);
list.append(...listItems);
