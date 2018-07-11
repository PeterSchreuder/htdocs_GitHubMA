const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let shot;
let bird;


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

room_width=canvas.width;
room_height=canvas.height;

let image = new Image();
image.src = "images/fast.jpg";

shot = new Audio('sound/gun_shotgun_shot_01.wav');


window.addEventListener("load",()=>{

    bird = {};
    bird.image = image;
    bird.pos = new Vector2d(500,300);
    bird.vel = new Vector2d(-10,0)

    animate();
});

window.addEventListener('mousedown',(evt)=>{
    shot.play();
    let mouse_x = evt.clientX;
    let mouse_y = evt.clientY;

    if (mouse_x > bird.pos.dx && mouse_x < bird.pos.dx + 200 && mouse_y > bird.pos.dy && mouse_y < bird.pos.dy + 200)
    {
        bird.pos.dx = room_width
    }
});

function animate()
{
    context.clearRect(0,0,room_width,room_height);
    requestAnimationFrame(animate);
    bird.pos.add(bird.vel);
    if (bird.pos.dx < -100)
    {
        bird.pos.dx = room_width;
        //bird.pos.dy = room_height;
    }

    context.drawImage(bird.image,bird.pos.dx,bird.pos.dy,100,100);
}