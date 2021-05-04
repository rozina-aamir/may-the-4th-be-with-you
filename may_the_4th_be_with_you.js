function setup(){
    createCanvas(500, 500, WEBGL);
    translate(-width/2, -height/2);
    noStroke();
    frameRate(500);
}

function draw(){
    translate(-width/2, -height/2);
    lights();
    background(0);
    translate(width / 2, height / 2, -height);
    let rz = map(mouseY, 0, height, 0, PI);
    let ry = map(mouseX, 0, width, 0, HALF_PI);
    rotateZ(rz);
    rotateY(ry);
    for(let y = -1;y <= 5;y++) {
        for(let x = -1;x <= 5;x++) {
            for(let z = -1;z <= 5;z++) {
                push();
                translate(200 * x, 200 * y, -200 * z);
                sphere(2);
                pop();
            }
        }
    }
}
