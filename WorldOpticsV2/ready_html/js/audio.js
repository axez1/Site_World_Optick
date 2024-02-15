function audioMain() {
  let soundButton = document.querySelector('.soundbutton');
  let	audio = document.querySelector('.audio');

  audio.volume = 0.05;
  
  soundButton.addEventListener('click', elem => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
  })

  window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
  }

  window.onblur = function() {
    audio.pause()
  }
}
audioMain()
export default audioMain;