import mitchURL from './mitch.jpg';
import yasssURL from './mitch-yass.jpg';
import sophieURL from './sophie.mp3';
import './style.css';

const noSound = "click for sound and lights"
const yasSound = "click to turn off sound and lights"
const warning = "yassification may be harmful to photosensitive users. hover/tap for yassification";

const app = document.querySelector<HTMLDivElement>('#app')!

let sound = false;

const yassification = document.createElement("button");
yassification.innerText = noSound;

const yassify = () => {
  mitch.src = yasssURL;
  mitch.alt = "Man with yellow hair, yassified";
}

const unyassify = () => {
  mitch.src = mitchURL;
  mitch.alt = "Man with yellow hair";
}

yassification.onclick = () => {
  sound = !sound;

  if(!sound) {
    yassification.innerText = noSound;
    sophie.pause();
    sophie.currentTime = 0;
  } else {
    yassification.innerText = yasSound;
  }
}

app.appendChild(yassification);

const mitch = document.createElement("img");
mitch.src = mitchURL;
mitch.alt = "Man with yellow hair";

const sophie = new Audio(sophieURL);

mitch.onmouseenter = async () => {
  yassify();
  if(sound) {
    document.body.classList = ["animated"];
    await sophie.play();
    setTimeout(() => {
      unyassify();
      document.body.classList = [];
    }, sophie.duration * 1000);
  }
};

mitch.onmouseleave = () => {
  unyassify();
  document.body.classList = [];
  sophie.pause();
  sophie.currentTime = 0;
};

app.appendChild(mitch);

const warningElement = document.createElement("p");
warningElement.innerText = warning;

app.appendChild(warningElement);
