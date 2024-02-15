const videoItems = [
  {
    "id": 1,
    "video": "../assets/media/video/video1.mp4"
  },
  {
    "id": 2,
    "video": "../assets/media/video/vid2.mp4"
  },
  {
    "id": 3,
    "video": "../assets/media/video/vid3.mp4"
  },
  {
    "id": 4,
    "video": "../assets/media/video/vid4.mp4"
  },
  {
    "id": 5,
    "video": "../assets/media/video/vid5.mp4"
  }
]

let prevBtn = document.querySelector(".vidio__button-block .products__button .prev");
let nextBtn = document.querySelector(".vidio__button-block .products__button .next");

let activeVideo = 0;
let sliderVideo = document.querySelector(".videoslider__wrapper");

prevBtn.addEventListener('click', function() {
  prevSlide();
})
nextBtn.addEventListener('click', function() {
  nextSlide();
})

function nextSlide() {
  activeVideo++;
  if(activeVideo > videoItems.length-1) activeVideo = 0;
  initSliderAbout();
}

function prevSlide() {
  activeVideo--;
  if(activeVideo < 0) activeVideo = videoItems.length-1;
  initSliderAbout();
}

const initSliderAbout = () => {
  sliderVideo.innerHTML = '';
  if(videoItems.length > 0) {
    let activeItem = videoItems[activeVideo];
    let newVideo = document.createElement('div');
    newVideo.dataset.id = activeItem.id;
    newVideo.innerHTML = 
            `<div class="video__wrapper">
            <div class="video-player">
              <video src="${activeItem.video}" class="video"></video>
              <div class="video-controls">
                <div class="video-controls-play">
                  <img class="play__btn" src="../assets/icons/action_video_buttons/play.gif" alt="play">
                </div>
                <div class="video-controls-stop">
                  <img src="../assets/icons/action_video_buttons/stop.gif" alt="stop">
                </div>
                <div class="video-controls-progress">
                  <input type="range" class="progress">
                </div>
                <div class="video-controls-time">00:00</div>
                <div class="video-controls-volume">
                  <button class="volumeSet">
                    <img src="../assets/icons/action_video_buttons/volume.gif" alt="volume">
                  </button>
                  <input type="range" name="volume" id="volumeRange" class="volumeRange" min="0" max="100" value="30">
                </div>
              </div>
            </div>
          </div>`;
          
          sliderVideo.appendChild(newVideo);

          let video = document.querySelector('.video');
          let playBtn = document.querySelector('.video-controls-play');
          let stopBtn = document.querySelector('.video-controls-stop');
          let playBtnImg = document.querySelector('.play__btn');
          let progress = document.querySelector('.progress');
          let time = document.querySelector('.video-controls-time');
          let volumeSlider = document.querySelector('.volumeRange');
          let btnVolume = document.querySelector('.volumeSet');
          let volumeContainer = document.querySelector('.video-controls-volume');

          playBtn.addEventListener('click', toggleVideoStatus);
          video.addEventListener('click', toggleVideoStatus);
          stopBtn.addEventListener('click', stopVideo);
          video.addEventListener('timeupdate', updateProgress);
          progress.addEventListener('change', setProgress);
          volumeSlider.addEventListener('input', setVolume);

          btnVolume.addEventListener('mouseover', () => {
            if (!volumeSlider.classList.contains('active')) volumeSlider.classList.toggle('active')
          })
          btnVolume.addEventListener('click', switchVolume)
          volumeContainer.addEventListener('mouseleave', () => {
              volumeSlider.classList.remove('active')
          })

          function setVolume() {
            video.volume = volumeSlider.value / 100
          }

          function switchVolume() {
            if (volumeSlider.value != 0) {
                btnVolume.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>'
                volumeSlider.value = 0
                video.volume = 0
            } else {
                btnVolume.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>'
                volumeSlider.value = 100
                video.volume = 1
            }
        }

          function toggleVideoStatus() {
            if( video.paused ) {
              video.play();
              playBtnImg.src = '../assets/icons/action_video_buttons/pause.gif';
            } else {
              video.pause();
              playBtnImg.src = '../assets/icons/action_video_buttons/play.gif';
            }
          }
          function stopVideo() {
            video.currentTime = 0;
            video.pause();
            playBtnImg.src = '../assets/icons/action_video_buttons/play.gif';
          }
          function updateProgress() {
            progress.value = ( video.currentTime / video.duration ) * 100;
            let minutes = Math.floor( video.currentTime / 60);
            if( minutes < 10 ) {
              minutes = '0' + String(minutes);
            }
            let seconds = Math.floor( video.currentTime % 60);
            if( seconds < 10 ) {
              seconds = '0' + String(seconds);
            }
            time.innerHTML = `${minutes}:${seconds}`;
          }
          function setProgress() {
            video.currentTime = ( progress.value * video.duration ) / 100;
          }
      };
}
initSliderAbout();

export default videoItems;