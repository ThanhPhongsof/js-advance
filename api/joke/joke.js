const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWapper = document.querySelector(".joke");
const endPoint = `https://icanhazdadjoke.com/`;
async function getJoke() {
  const response = await fetch(endPoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

jokeButton.addEventListener("click", async () => {
  jokeWapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeading.textContent = data.joke;
  jokeWapper.classList.remove("is-loading");
});
