function main (){
    var sideA = getWidth ();
    var sideB = getHeight ();
    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-35.php
    var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    penup ();
    left (90);
    forward (sideA)/2;
    console.log (turtle.pos);
    right (90);
    forward (sideB)/2;
    right (45);
    pendown ();
    forward (sideC);

    penup ();
    right (45);
    forward (sideA)/2;
    console.log (turtle.pos);
    left (90);
    forward (sideB)/2;
    left (45);
    pendown ();
    forward (sideC);
}

var NumberSteps = prompt ("number of steps: ")
   

function Steps(){
    forward (sideA/NumberSteps);
}
