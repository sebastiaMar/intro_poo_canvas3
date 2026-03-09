const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "white";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "red", "Tec", "rgb(66, 135, 245)");
miCirculo.draw(ctx);

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)");
miCirculoRandom.draw(ctxRandom);
//let maxcircules= 10;
let arrayCircle = [];

for (let i = 0; i < 5; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

  // Generar color aleatorio
  let randomColor = `rgb(${Math.floor(Math.random()*256)}, 
                         ${Math.floor(Math.random()*256)}, 
                         ${Math.floor(Math.random()*256)})`;

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    "#9e500d",   // color del borde
    i + 1,
    randomColor  // fondo diferente para cada círculo
  );

  arrayCircle.push(miCirculoMultiple);
  miCirculoMultiple.draw(ctxMultiple);
}