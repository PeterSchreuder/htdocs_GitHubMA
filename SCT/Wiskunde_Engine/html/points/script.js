const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let room_width=canvas.width;
let room_height=window.innerHeight;

context.fillRect(20,20,50,50);

let b = new Point(500,500);

function loop() {
    context.clearRect(0,0,room_width,room_height);
    for (let i=0; i<6;i++)
    {
        let a = new Point(Math.random()*room_width,Math.random()*room_height,15,"red");
        a.draw(context);
    }

}
setInterval(loop,60);

