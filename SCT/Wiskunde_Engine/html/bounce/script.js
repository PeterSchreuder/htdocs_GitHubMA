const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

room_width=canvas.width;
room_height=canvas.height;

context.fillRect(0,0,100,100);

let gameObjects = [];

for (let i = 0; i < 100; i++)
{
    let gameObject = {};
    gameObject.pos = new Vector2d(getRandomNumber(canvas.width, canvas.height), getRandomNumber(canvas.width, canvas.height));
    gameObject.vel = new Vector2d(6, 6);
    gameObject.acc = new Vector2d(0, 0);
    gameObject.ball = new Point(0, 0, 10, "red");
    gameObjects.push(gameObject);
}

// let pos = new Vector2d(100,100);
// let vel = new Vector2d(3,0);
// let acc = new Vector2d(0,1);
//
// let ball = new Point(100,100,10,"red");

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,room_width,room_height);
    for (let i = 0; i < gameObjects.length; i++)
    {
        gameObjects[i].ball.position = gameObjects[i].pos;
        gameObjects[i].vel.add(gameObjects[i].acc);
        gameObjects[i].pos.add(gameObjects[i].vel);
        gameObjects[i].vel.add(gameObjects[i].acc);
        gameObjects[i].ball.draw(context);
        if (gameObjects[i].pos.dx < 0)
        {
            gameObjects[i].vel.dx = - gameObjects[i].vel.dx;
        }
        if (gameObjects[i].pos.dx > room_width)
        {
            gameObjects[i].vel.dx = - gameObjects[i].vel.dx;
        }
        if (gameObjects[i].pos.dy < gameObjects[i].ball.r)
        {
            gameObjects[i].vel.dy = - gameObjects[i].vel.dy;
            gameObjects[i].pos.dy = gameObjects[i].ball.r;
        }
        if (gameObjects[i].pos.dy > room_height)
        {
            gameObjects[i].vel.dy = - gameObjects[i].vel.dy;
            gameObjects[i].pos.dy = room_height - gameObjects[i].ball.r;
        }
    }
    // vel.add(acc);
    // pos.add(vel);
    // ball.position = pos;
    // ball.draw(context);
    // console.log(ball.position);
    //
    // if (pos.dx>=room_width-ball.r)
    // {
    //     vel.dx = -vel.dx;
    // }
    //
    // if (pos.dy>=room_height-ball.r)
    // {
    //     vel.dy = -vel.dy;
    // }
    //
    // if (pos.dx<=0+ball.r)
    // {
    //     vel.dx = -vel.dx;
    // }
    //
    // if (pos.dy<=0+ball.r)
    // {
    //     vel.dy = -vel.dy;
    // }

}

function getRandomNumber(min,max)
{
    return Math.floor(Math.random()*max);
}

// function getRandomNumber(min,max)
// {
//     return Math.floor(Math.random()*(max-min))-min;
// }


animate();