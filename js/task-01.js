const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const elements = category.querySelector("ul").children.length;
  console.group(`Category: ${categoryTitle}`);
  console.log("Elements: ", elements);
  console.groupEnd();
});
