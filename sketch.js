let mapImg;
let clat = 0;
let clon = 0;
let lat = 31.2304;
let lon = 121.4737;
let zoom = 1;

function preload(){
  mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0/1024x512?access_token=pk.eyJ1Ijoibm9tYWRlcSIsImEiOiJjanJ6MHBtbXEwamczNDlvYWxqc2UzM2dzIn0.MrP0H6Id5uaXMzajMrwkxg");
};

function mercX(lon){
  lon = radians(lon);
  let a = (128 / PI) * pow(2,zoom);
  let b = lon + PI;
  return a * b;
};

function mercY(lat){
 lat = radians(lat);
 let a = (128 / PI) * pow(2,zoom); 
 let b = tan(PI/4 + lat/2);
 let c = PI - log(b);
  return a * c;
};

function setup(){
  createCanvas(1024,512);
  translate(width / 2, height /2);
  imageMode(CENTER);
  image(mapImg,0,0);

  let cx = mercX(clon);
  let cy = mercY(clat);
  
  let x = mercX(lon) - cx;
  let y = mercY(lat) - cy;

  fill(255,0,200,200);
  ellipse(x,y,20,20);
};
