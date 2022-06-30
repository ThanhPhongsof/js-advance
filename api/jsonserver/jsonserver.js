//  json-server --watch db.json

const endpoint = `http://localhost:3000/course`;
const courseList = document.querySelector(".course-list");
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter-input");

const addNewCourse = async ({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) => {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {});
};

const updateCourse = async ({
  id,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) => {
  console.log({
    id,
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount,
  });
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {});
};

const getCourses = async (link = endpoint) => {
  const response = await fetch(link);
  const data = await response.json();
  courseList.innerHTML = "";
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
};
getCourses();

const renderItem = (item) => {
  const template = `
  <div class="course-item">
    <div class="course-image">
      <img src="${item.image}" alt="" />
      <button class="course-edit" data-id="${item.id}">
        <i class="fa fa-pencil"></i>
      </button>      
      <button class="course-remove" data-id="${item.id}">
        <i class="fa fa-times"></i>
      </button>
    </div>
    <div class="course-content">
      <h3 class="course-title">
        ${item.title}
      </h3>
      <div class="course-author">${item.author}</div>
      <div class="course-meta">
        <div class="course-rating">${item.rating}</div>
        <div class="course-enroll">${item.buyAmount}</div>
      </div>
      ${item.bestSeller ? `<div class="course-best-seller"></div>` : ``}
    </div>
  </div>  
  `;
  courseList.insertAdjacentHTML("beforeend", template);
};

formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const courseId = +this.elements["id"].dataset.id;

  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: this.elements["buyAmount"].value,
  };

  if (courseId === 0) await addNewCourse(course);
  else await updateCourse({ id: courseId, ...course });
  formPost.elements["id"].dataset.id = 0;
  this.reset();
  await getCourses();
  formSubmit.textContent = "Add course";
});

const deleteCourse = async (id) => {
  await fetch(`${endpoint}/${id}`, { method: "DELETE" });
};

const getSingleCourse = async (id) => {
  const response = await fetch(`${endpoint}/${id}`);
  const data = response.json();
  return data;
};

courseList.addEventListener("click", async function (e) {
  if (e.target.matches(".course-remove")) {
    const id = +e.target.dataset.id;
    await deleteCourse(id);
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const id = +e.target.dataset.id;
    const data = await getSingleCourse(id);

    formPost.elements["id"].dataset.id = data.id;
    formPost.elements["image"].value = data.image;
    formPost.elements["title"].value = data.title;
    formPost.elements["author"].value = data.author;
    formPost.elements["price"].value = data.price;
    formPost.elements["rating"].value = data.rating;
    formPost.elements["buyAmount"].value = data.buyAmount;
    formPost.elements["bestSeller"].checked = data.bestSeller;
    formSubmit.textContent = "Update course";
  }
});

filterInput.addEventListener(
  "keydown",
  debounceFn(function (e) {
    let path = endpoint;
    if (e.target.value !== "") {
      path = `${endpoint}?title_like=${e.target.value}`;
    }
    getCourses(path);
  }, 500)
);

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
