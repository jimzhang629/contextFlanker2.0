function contextFlankerPracticeTask(){
    // set taskName for data logging
    taskName = "contextFlankerPracticeTask";
    // nPracticeTrials = 3; //this gets overriden by main anyway

    // prepare for task
    hideInstructions();
    showCanvas();
    hideCursor();
    changeScreenBackgroundTo("lightgrey");

    // global variables for functions
    taskFunc = practiceTrialFunc;
    transitionFunc = itiScreen;
    imageSet = selectedPracticeImages;
    stimFunc = draw;

    //draw the trial input, which is one of the practice images in this case
    console.log("stimFunc:" + trialCount + " " + stimFunc);


    //create task arrays
    // buildAttentionalSingletonPracticeTaskArray();

    // selectedImages.forEach(i => draw(i)); //run a trial on each target image in selectedImages array
    // start task after countdown (calls taskFunc)
    countDown(3);

}