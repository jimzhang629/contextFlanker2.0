/** displays an image located at filePath on a canvas 
 * @param {string} filePath - the file path for your image
 */

//get the coordinates of the center image somehow. Need to store it as a variable prob.
function draw(centerImg) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw center img in the center of the canvas
    ctx.drawImage(centerImg, canvas.width/2 - centerImg.width/2, canvas.height/2 - centerImg.height/2, width='500', height='300');
    //draw a flanker at 1/4 of screen and at 3/4 of screen (hope this works)
    ctx.drawImage(basketballImg, canvas.width/2 - basketballImg.width - centerImg.width/2, canvas.height/2 - basketballImg.height/2);
    ctx.drawImage(basketballImg, canvas.width - basketballImg.width, canvas.height/2 - basketballImg.height/2);
}

//try to avoid repeat code but does this actually work


$(document).ready(function(){
    setupCanvas();
    $('#jimCanvas').show();
    draw(testImg);
});


/*
Set up the canvas when the document is ready, but don't show it until the task starts.
Need to define canvas as a global variable, but don't actually give it a definition until setupcanvas function.

combine the functions.

show canvas just displays the canvas, it doesn't show the pictures.

Also put the pictures into an array, and pre-load that.

ALSO dont use pre-defined image height and width, put the four corners in
*/

