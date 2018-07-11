class Pong_Ball
{
    constructor(x,y,r,speedX,speedY,color){
        this.x=x;
        this.y=y;
        this.r=r;
        this.speedX=speedX;
        this.speedY=speedY;
        this.color=color;
    }

    // loop()
    // {
    //     requestAnimationFrame(loop);
    //     x+=speedX;
    //     y+=speedY;
    //
    //     if (y < r)
    //     {
    //         speedY = -speedY;
    //     }
    //     if (x > canvas.width-r)
    //     {
    //         speedX = -speedX;
    //     }
    //
    //     if (y > canvas.height-r)
    //     {
    //         speedY = -speedY;
    //     }
    //     if (x < r)
    //     {
    //         speedX = -speedX;
    //     }
    // }
    //
    // loop();

    draw(context) {
        context.beginPath();
        context.lineWidth="4";
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.fillStyle = this.color;
        context.stroke();
        context.fill();
        context.closePath();
    }
}

