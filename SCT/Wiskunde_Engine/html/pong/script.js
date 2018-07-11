const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

room_width=canvas.width;
room_height=canvas.height;

//let ball = new Point(100,100,40,"red");
//let speedX = 2;
//let speedY = 2;

// let a
// {
//     = new Pong_Ball(Math.random() * room_width, Math.random() * room_height, 15, 2, 2, "red");
//     a.loop();
//     a.draw(context);
// }
// function animation()
// {
//     requestAnimationFrame(animation);
//
//     context.clearRect(0,0,room_width,room_height);
//     //ball.x+=speedX;
//     //ball.y-=speedY;
//     //ball.draw(context);
//
//
//
//
// }
//
// animation();