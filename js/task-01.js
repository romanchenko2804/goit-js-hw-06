const countOfCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: `, countOfCategoriesRef.length);

const categoryRef = document.querySelectorAll(".item h2");
const nameOfCategoryRef = categoryRef.forEach((cat) => {
  console.log(`Category: `, cat.textContent);
  console.log(`Elements: `, cat.nextElementSibling.children.length);
});
