testFilePath = '../images/M1.jpg';

/** displays an image located at filePath on a canvas 
 * @param {string} filePath - the file path for your image
 */

function draw(filePath) {
    let testCanvas = document.getElementById('testCanvas');
    let testCtx = testCanvas.getContext('2d');
    let testImg = new Image();
    testImg.className = 'center';
    testImg.onload = () => {
        testCtx.drawImage(testImg, testCanvas.width/2 - testImg.width/2, testCanvas.height/2 - testImg.height/2);
        testCtx.beginPath();
        testCtx.moveTo(30, 96);
        testCtx.lineTo(70, 66);
        testCtx.lineTo(103, 76);
        testCtx.lineTo(170, 15);
        testCtx.stroke();
    };
    
    testImg.src = filePath;
    $('#testCanvas').show();
}

$(document).ready(function(){
    draw(testFilePath);
});
