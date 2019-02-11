let mapImg;
function preload(){
  mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/0,0,1,0/1024x512?access_token=pk.eyJ1Ijoibm9tYWRlcSIsImEiOiJjanJ6MHBtbXEwamczNDlvYWxqc2UzM2dzIn0.MrP0H6Id5uaXMzajMrwkxg");
}

function setup(){
  createCanvas(1024,512);
  image(mapImg,0,0);
}
