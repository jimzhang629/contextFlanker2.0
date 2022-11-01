let basketballImg = new Image(340, 340);
basketballImg.src = '../images/basketball.jpg';

let testImg = new Image(500,300);
testImg.src = '../images/M3.jpg';
// basketball img is 340 x 340

// these images are 500 x 300
// select  images to use in task (out of 272 options for manmade and 272 options for natural)
// should rebrand all the images as smaller or larger actually
let imageSRCs = [];
for (let i = 1; i <= 272; i++) {
  imageSRCs.push(`../images/M${i}.jpg`);
  imageSRCs.push(`../images/N${i}.jpg`);
}

// randomly sample from images
let selectedSRCs = _.sample(imageSRCs,sampleSize);
let unselectedSRCs = imageSRCs.filter(image => !selectedSRCs.includes(image))

// load images and store in selectedImages var
let selectedImages = new Array(selectedSRCs.length);

for (var i = 0; i < selectedImages.length; i++) {
  selectedImages[i] = new Image(500,300);
  selectedImages[i].src = selectedSRCs[i];
}

let selectedPracticeImages = selectedImages.slice(0,nPracticeTrials);
let selectedTestImages = selectedImages.slice(nPracticeTrials);

console.log("practice imgs: ", selectedPracticeImages);
console.log("test imgs: ", selectedTestImages);
