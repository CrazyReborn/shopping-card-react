import xboxSeriesXImg from './images/xboxX.png';
import xboxSeriesSImg from './images/seriess.png';
import playstation5Img from './images/ps5.png';
import switchImg from './images/switch.png';

const xboxSeriesX = {
    name: 'Xbox Series X',
    price: "399",
    img: xboxSeriesXImg,
    notAvalible: false,
}

const xboxSeriesS = {
    name: 'Xbox Series S',
    price: "299",
    img: xboxSeriesSImg,
    notAvalible: false,
}

const playstation5 = {
    name: 'Sony Playstation 5',
    price: "499",
    img: playstation5Img,
    notAvalible: false,
}

const nintendoSwitchRegular = {
    name: 'Nintendo Switch',
    price: "299",
    img: switchImg,
    notAvalible: false,
}

const nintendoSwitchOled = {
    name: 'Nintendo Switch OLED',
    price: "349",
    notAvalible: false,
}

export { xboxSeriesS, xboxSeriesX, playstation5, nintendoSwitchOled, nintendoSwitchRegular}