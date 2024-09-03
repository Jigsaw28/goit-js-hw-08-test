import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log('played the video!');
}

currentTimeFn();

function currentTimeFn() {
  const array = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (array) {
    const currentTime = array.seconds;
    player.setCurrentTime(currentTime);
  }
}
