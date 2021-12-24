import mitchURL from './mitch.jpg';
import yasssURL from './mitch-yass.jpg';
import sophieURL from './sophie.mp3';
import './style.css';

const noSound = "click for sound and lights"
const yasSound = "click to turn off sound and lights"
const warning = "yassification may be harmful to photosensitive users. hover/tap for yassification";

const app = document.querySelector<HTMLDivElement>('#app')!

let sound = false;

const soundButton = document.createElement("button");
soundButton.innerText = noSound;

const yassify = async (sound: boolean) => {
  mitch.src = yasssURL;
  mitch.alt = "Man with yellow hair, yassified";
  if (sound){
    document.body.className = "animated";
    await sophie.play();
    setTimeout(() => {
      unyassify();
    }, sophie.duration * 1000);
  }
}

const unyassify = () => {
  mitch.src = mitchURL;
  mitch.alt = "Man with yellow hair";
  document.body.className = "";
  sophie.pause();
  sophie.currentTime = 0;
}

soundButton.onclick = () => {
  sound = !sound;

  if(!sound) {
    soundButton.innerText = noSound;
    sophie.pause();
    sophie.currentTime = 0;
  } else {
    soundButton.innerText = yasSound;
  }
}

app.appendChild(soundButton);

const mitch = document.createElement("img");
mitch.src = mitchURL;
mitch.alt = "Man with yellow hair";

const sophie = new Audio(sophieURL);

mitch.onmouseenter = async () => {
  yassify(sound);
};

mitch.onmouseleave = () => {
  unyassify();
};

app.appendChild(mitch);

const warningElement = document.createElement("p");
warningElement.innerText = warning;

app.appendChild(warningElement);
