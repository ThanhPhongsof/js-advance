window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const btnPlay = document.querySelector(".player-play");
  const btnPrev = document.querySelector(".player-prev");
  const btnNext = document.querySelector(".player-next");
  const playerDuration = document.querySelector(".player-duration");
  const palyerRemaining = document.querySelector(".player-remaining");
  const progressBar = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  let playing = true;
  const list = [
    "damcuoinha.mp3",
    "anhketemroi.mp3",
    "huongdembayxa.mp3",
    "vaycuoi.mp3",
  ];
  let songIndex = 0;
  btnPlay.addEventListener("click", handleMusicPlay);
  btnNext.addEventListener("click", function () {
    handleChangeMusic(1);
  });
  btnPrev.addEventListener("click", function () {
    handleChangeMusic(-1);
  });
  song.addEventListener("ended", function () {
    handleChangeMusic(1);
  });

  progressBar.addEventListener("change", handleProgressBar);

  function handleChangeMusic(dir) {
    if (dir === 1) {
      songIndex++;
      if (songIndex >= list.length - 1) {
        songIndex = 0;
      }
      handlePlay(songIndex);
    } else if (dir === -1) {
      songIndex--;
      if (songIndex < 0) {
        songIndex = list.length - 1;
      }
      handlePlay(songIndex);
    }
  }

  function handlePlay(songIndex) {
    song.setAttribute("src", `./flies/${list[songIndex]}`);
    playing = true;
    handleMusicPlay();
  }

  function handleMusicPlay() {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      btnPlay.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      btnPlay.classList.remove("fa-pause");
      playing = true;
    }
  }

  function displayTimer() {
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    playerDuration.textContent = !duration ? "0:00" : formatTimer(duration);
    palyerRemaining.textContent = formatTimer(currentTime);
  }

  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  function handleProgressBar() {
    song.currentTime = progressBar.value;
  }

  const timer = setInterval(displayTimer, 500);
});
