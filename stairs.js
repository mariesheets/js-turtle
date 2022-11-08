function main(){
    var sideA = getWidth();
    var sideB = getHeight();
    penup();
    left(90);
    forward(sideA/2);
    console.log (turtle.pos);
    right (90);
    forward(sideB/2);
    right (90);
    pendown ();

    var NumberSteps = prompt ("number of steps: ")

    for (var i = 0; i < NumberSteps; i++) {
        forward (sideA/NumberSteps);
        left(90);
        forward(sideB/NumberSteps);
        right (90);
    }

}