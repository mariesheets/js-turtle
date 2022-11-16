var minimum = -getWidth()/2;
var max =  getHeight()/2;


function main()
{
    //set up and move to starting position
    wrap(false);
    
    goto(-getWidth()/2, minimum);

    //get numver of bricks to draw from user
    numSquares = 10;

    //calculate the side length
    sideLength = getWidth()/numSquares;
    brickBlock(50);
    for (var i = 0; i < numSquares; i++)
    {
        brickBlock(sideLength);
        strafe(sideLength);
    }

    left(90);
    forward(sideLength*2);
    right(90);
    forward(50);
    Greentube(50);


    goto(0,0);

    questionBlock();
    strafe(sideLength/4);
    
}

function changeBackground(color){
    document.body.style.background = (115, 215, 255,1)
}
// QUESTION BLOCK by Marie Sheets

function questionBlock(sideLength){
    questionBackground(sideLength);
    questionMark(sideLength);
}

function questionBackground(){
    strafe(sideLength / 2);
    width(sideLength);
    colour(255, 233, 0,1);
    forward(sideLength);
    penup();
    left(180);
    forward(sideLength);
    left(180);
    width(2);
    colour(0,0,0,1);
}

//draws QuestionMark
function questionMark()
{
    forward(sideLength/6);
    pendown();
    forward(sideLength/12);
    penup();
    forward(sideLength/14);
    pendown();
    forward(sideLength/12);
    right(90);
    for (var i = 0; i < 270; i++)
    {
        width(1);
        forward(sideLength/300);
        left(1);
    }
}

/*
    * BRICK BLOCK by Phil Bowman
    * The five functions below draw a square of bricks that can be tiled left to right
    * All of the five functions are necessary
    * The turtle starts at the bottom-left and ends in the same place
*/
function brickBlock(sideLength)
{
    colorBackground(sideLength);
    brickRow(sideLength, 2);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 3);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 2);
    penup();
    left(180);
    forward(sideLength*2/3);
    left(180);
}

// color the background of the square
function colorBackground(sideLength)
{
    strafe(sideLength / 2);
    width(sideLength);
    colour(203, 65, 84,1);
    forward(sideLength);
    penup();
    left(180);
    forward(sideLength);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);
}


// draws a row of bricks within the brick block
function brickRow(sideLength, numBricks)
{
    if (numBricks == 2)
    {
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        rectangle(sideLength/3, sideLength/2);
        strafe(-sideLength/2);
    }

    if (numBricks == 3)
    {
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90)
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(sideLength/4);
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90)
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(-sideLength*3/4);
    }

}

// draws a rectangle
function rectangle(height, width) {
    for(var i = 0; i < 4; i++){
        if (i % 2 == 0)
        {
            forward(height);
        }
        else
        {
            forward(width);
        }
       right(90);
    }
 }

// move from left to right without drawing or changing angle
function strafe(distance)
{
    penup();
    if (distance < 0)
    {
        left(90);
        forward(Math.abs(distance));
        right(90);
    }
    else
    {
        right(90);
        forward(Math.abs(distance));
        left(90);
    }
    pendown();
}
/*
    END OF BRICK BLOCK FUNCTIONS
*/

/*

GRREEEEN TUBE BY MARCOOOO
This makes 3 diffrent Tubes in difrent areas and sizes 
The turtle goes back to the bottom left
*/ 


function Greentube(sideLength){

    //This makes the first rectangle 

    strafe(sideLength / 2);
    width(sideLength/1.5);
    colour(78, 188, 0,1);
    forward(sideLength*1.2);
    penup();
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);

    // This makes the 2nd rectangle adding it to the frist rectangle making the tube 
    strafe(sideLength / 2);
    width(sideLength/1.1);
    colour(78, 188, 0,1);
    forward(sideLength/2);
    penup();
    left(180);
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);
   
    //This moves the turtle into an optimal positon for the 2nd tube 
    penup();
    forward(sideLength/2);
    forward(sideLength*1.2);
    right(90);
    forward(sideLength*5);
    right(90);

    //This makes the first rectangle part of the 2nd tube 
    strafe(sideLength / 2);
    width(sideLength/1.5);
    colour(78, 188, 0,1);
    forward(sideLength);
    penup();
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);

    //This makes the 2nd rectangle part of the 2nd tube 
    strafe(sideLength / 2);
    width(sideLength/1.1);
    colour(78, 188, 0,1);
    forward(sideLength/2);
    penup();
    left(180);
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);

    //This moves the turtle into an optimal positon for the 3nd tube 
    penup();
    forward(sideLength/2);
    forward(sideLength);
    right(90);
    forward(sideLength*4);
    right(90);


    //This makes the first rectangle part of the 3rd tube 
    strafe(sideLength / 2);
    width(sideLength/1.5);
    colour(78, 188, 0,1);
    forward(sideLength*1.6);
    penup();
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);

    //This makes the 2nd rectangle part of the 3nd tube 
    strafe(sideLength / 2);
    width(sideLength/1.1);
    colour(78, 188, 0,1);
    forward(sideLength/2);
    penup();
    left(180);
    forward(sideLength/2);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);
    penup();    
    
    //this moves it back to the bottom left 
    goto(0,0);
    forward(max);
    right(90);
    forward(max);
    right(90);
}