const createNotification = (
  title = "Welcome to notifications",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
) => {
  const template = `    
  <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        ${desc}
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
};

const randomData = [
  "Welcome to js course",
  "Welcome to this tutorial",
  "Today is good day",
  "My name is Phong",
];
let lastTitle;

const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) createNotification(title);
  lastTitle = title;
}, 5000);
