size(400, 400);
let x = 30;
let y = 350;
let startSpeed = 2;
let finalSpeed;
let time;
let acceleration;
let space;
// ok... so this is the beggining

draw = function(){
    background(205, 205, 63);

    // ellipse
    fill(100, 100, 250);
    ellipse(x, y, 40, 40);

    // conditional of the ellipse movement
    if (x < 100){
        speed = 0.5;
    }
    else if(x > 380){
        speed = 0;
    }
    x = x + speed;

    // position of the ball in the screen.
    document.querySelector('#drawing-info').innerHTML =  "Y position: " + y + "<br>" + "X position: " + x;
}






