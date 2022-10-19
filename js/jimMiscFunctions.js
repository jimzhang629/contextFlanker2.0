function setupCanvas(filePath) {
    canvas = document.getElementById('jimCanvas');
    ctx = canvas.getContext('2d');
}

// Fisher-Yates shuffle
function shuffle(array){
    for(let j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }