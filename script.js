
const icons = document.querySelectorAll('.game-icon');
const background = document.getElementById('background');
const audio = document.getElementById('bg-music');

let currentTrack = null;
let fadeInterval = null;

function fadeAudio(toVolume, speed = 0.3) {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(() => {
    if (Math.abs(audio.volume - toVolume) < speed) {
      audio.volume = toVolume;
      clearInterval(fadeInterval);
      if (toVolume === 0) {
        audio.pause();
      }
    } else {
      audio.volume += (toVolume > audio.volume ? speed : -speed);
    }
  }, 100);
}

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const bg = icon.getAttribute('data-bg');
    const music = icon.getAttribute('data-music');

    // Change background and fade in
    background.style.backgroundImage = `url(${bg})`;
    background.classList.add('active');

    // Play music with fade-in
    if (currentTrack !== music) {
      audio.pause();
      audio.src = music;
      audio.volume = 0;
      audio.play();
      fadeAudio(1); // fade to full volume
      currentTrack = music;
    } else {
      fadeAudio(1); // fade in if same track
    }
  });

  icon.addEventListener('mouseleave', () => {
    // Fade out background
    background.classList.remove('active');

    // Fade out music
    fadeAudio(0);
    currentTrack = null;
  });
});
// JavaScript Document
