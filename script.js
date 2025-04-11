const icons = document.querySelectorAll('.game-icon');
const background = document.getElementById('background');
const audio = document.getElementById('bg-music');

let currentTrack = null;

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const bg = icon.getAttribute('data-bg');
    const music = icon.getAttribute('data-music');

    // Change background
    background.style.backgroundImage = `url(${bg})`;

    // Play new music only if different
    if (currentTrack !== music) {
      audio.pause();
      audio.src = music;
      audio.play();
      currentTrack = music;
    }
  });

  icon.addEventListener('mouseleave', () => {
    // Optionally stop the music or keep it playing
    // Uncomment the lines below if you want to stop on mouse out:
    // audio.pause();
    // currentTrack = null;
  });
});
