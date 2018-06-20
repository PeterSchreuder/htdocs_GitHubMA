const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

room_width=canvas.width;
room_height=canvas.height;

context.fillRect(0,0,100,100);

//let gameObject = [];


    let gameObject = {};
    gameObject.pos = new Vector2d(canvas.width/2, canvas.height/2);
    gameObject.vel = new Vector2d(0, 0);
    gameObject.acc = new Vector2d(0, 0);
    gameObject.ball = new Point(0, 0, 10, "red");
    //gameObject.push(gameObject);


// let pos = new Vector2d(100,100);
// let vel = new Vector2d(3,0);
// let acc = new Vector2d(0,1);
//
// let ball = new Point(100,100,10,"red");

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,room_width,room_height);

        gameObject.ball.position = gameObject.pos;
        gameObject.vel.add(gameObject.acc);
        gameObject.pos.add(gameObject.vel);
        gameObject.vel.add(gameObject.acc);
        gameObject.ball.draw(context);
        if (gameObject.pos.dx < 0)
        {
            gameObject.vel.dx += (gameObject.vel.dx);
            gameObject.pos.dx = gameObject.ball.r;
        }
        if (gameObject.pos.dx > room_width)
        {
            gameObject.vel.dx -= (gameObject.vel.dx);
            gameObject.pos.dx = room_width - gameObject.ball.r;
        }
        if (gameObject.pos.dy < gameObject.ball.r)
        {
            gameObject.vel.dy += (gameObject.vel.dy);
            gameObject.pos.dy = gameObject.ball.r;
        }
        if (gameObject.pos.dy > room_height)
        {
            gameObject.vel.dy -= (gameObject.vel.dy);
            gameObject.pos.dy = room_height - gameObject.ball.r;
        }

}

//Keys 'n shit
function keyDown(evt)
{
    let _speed = 6;
    console.log(evt.keyCode);
    if (evt.keyCode == 39)
    {
        console.log('Rechts');
        gameObject.vel.add(new Vector2d(_speed, 0));
    }
    if (evt.keyCode == 37)
    {
        console.log('Links');
        gameObject.vel.add(new Vector2d(-_speed, 0));
    }
    if (evt.keyCode == 38)
    {
        console.log('Omhoog');
        gameObject.vel.add(new Vector2d(0, -_speed));
    }
    if (evt.keyCode == 40)
    {
        console.log('Omlaag');
        gameObject.vel.add(new Vector2d(0, _speed));
    }
}

function getRandomNumber(min,max)
{
    return Math.floor(Math.random()*max);
}

// function getRandomNumber(min,max)
// {
//     return Math.floor(Math.random()*(max-min))-min;
// }

window.addEventListener("keydown",keyDown,false);
//window.addEventListener("keyup",keyPressed,false);
animate();



/*
for (let i = 0; i < gameObject.length; i++)
    {
        gameObject[i].ball.position = gameObject[i].pos;
        gameObject[i].vel.add(gameObject[i].acc);
        gameObject[i].pos.add(gameObject[i].vel);
        gameObject[i].vel.add(gameObject[i].acc);
        gameObject[i].ball.draw(context);
        if (gameObject[i].pos.dx < 0)
        {
            gameObject[i].vel.dx += (gameObject[i].vel.dx);
        }
        if (gameObject[i].pos.dx > room_width)
        {
            gameObject[i].vel.dx -= (gameObject[i].vel.dx);
        }
        if (gameObject[i].pos.dy < gameObject[i].ball.r)
        {
            gameObject[i].vel.dy += (gameObject[i].vel.dy);
            gameObject[i].pos.dy = gameObject[i].ball.r;
        }
        if (gameObject[i].pos.dy > room_height)
        {
            gameObject[i].vel.dy -= (gameObject[i].vel.dy);
            gameObject[i].pos.dy = room_height - gameObject[i].ball.r;
        }
    }
 */