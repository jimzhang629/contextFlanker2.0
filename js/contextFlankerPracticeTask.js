function contextFlankerPracticeTask(){
    // set taskName for data logging
    taskName = "contextFlankerPracticeTask";
    nPracticeTrials = 3;

    // prepare for task
    hideInstructions();
    showCanvas();
    hideCursor();
    changeScreenBackgroundTo("lightgrey");

    // global variables for functions
    taskFunc = practiceTrialFunc;
    transitionFunc = itiScreen;

    //create task arrays
    buildAttentionalSingletonPracticeTaskArray();

    // start task after countdown (calls taskFunc)
    countDown(3);

}