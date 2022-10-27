// QOL parameters
let expStage = "prac1-1"; //first expStage, see instructions.js

// ----- Global Variables  ----- //
let nBlocks = 4;
let trialsPerBlock = 160; // (multiples of 16)

// for practice task
let nPracticeTrials = 16;
let practiceAccCutoff = 80; // 85 acc% = 7/8

// trial level information (default to lowest value)
let trialCount = 1, blockTrialCount = 1, block = 1, accCount = 0;

//global task arrays
let targetShapeArr = [], distractionArr = [], taskSequenceArr = [], targetLocationArr = [], distractorLocationArr = [], lineDirectionArr = [];
let sequenceTypeArr, sequenceKindArr, sequencePositionArr;

//other global vars
let canvas, ctx; // global canvas variable
let sampleSize = 3;
let taskFunc, transitionFunc, stimFunc, taskName;
let acc, stimOnset, respOnset, respTime, partResp, runStart;
let stimTimeout, breakOn = false, repeatNecessary = false, data=[];
let sectionStart, sectionEnd, sectionType, sectionTimer;
let keyListener = 0; // see below

// let blockOrder = getBlockOrder(randIntFromInterval(1,4));
// see counterbalancing.js for block order stuff. Define getBlockOrder in some other function.

function experimentFlow(){
    trialCount = 1;
    blockTrialCount = 1;
    if (!repeatNecessary) {
      block = 1;
    } else {
      block++;
    }
    accCount = 0;
    repeatNecessary = false;
    
    // I only have one practice task and one main task, so don't need all this stuff
    // also only two blocks
    // make a practice task though, and test using it

    if (expStage.indexOf("prac1") != -1){
      console.log('prac1');
    } else if (expStage.indexOf("main1") != -1){
      console.log('main1');
      endOfExperiment();
    }
  }
  
  function startExperiment(){
    prepareTaskCanvas();
  
    // create key press listener
    $("body").keypress(
      function(event){keyPressListener(event)}
    );
  
    // create key release listener
    $("body").keyup(
      function(event){keyReleaseListener(event)}
    );
  
    // start experiment
    runStart = new Date().getTime();
    runInstructions();
  }
  
  function endOfExperiment(){
    // hide stuff, show cursor
    hideInstructions();
    hideCanvas();
    showCursor();
  
    // upload data to menu.html's DOM element
    $("#RTs").val(data.join(";"));
    
    /* need to get the updateMainMenu function working first before doing this
    // show debriefing script from experimentWrapper.js
    updateMainMenu(nextForm());
    */
  }

     /** key-value meanings
     * 0:
     * 1:
     * 2:
     * 3: they kept holding from last trial, prompt them to let go
     * 4:
     * 5:
     * 6:
     * 7:
     * 8: this is keypress for start task?
     * 9:
     */
  function keyPressListener(event){

    // unnecessary key press
    if (keyListener == 0) {
      keyListener = 3;
      return
    }
  
    //key press during task when expected
    if (keyListener == 1) {
      keyListener = 2;
      partResp = event.which;
      respOnset = new Date().getTime() - runStart;
      getAccuracyAndRT(partResp);
    }
  }


  function keyReleaseListener(event){
    // expected key press during task
    if (keyListener == 2){
      keyListener = 0;
      clearTimeout(stimTimeout);
      transitionFunc();
      return;
    }
  
    // key press that was held too long
    if (keyListener == 3) {
      keyListener = 0;
      return;
    }
  
    // returning to task after holding down key too long or getting a screen size warning
    if (keyListener == 4) {
      keyListener = 0;
      countDown(3);
    }
  
    // after practice task feedback
    if (keyListener == 5) {
      keyListener = 0;
      sectionEnd = new Date().getTime() - runStart;
      logSectionData();
      navigateInstructionPath(repeatNecessary);
    }
  
    // block break
    if (keyListener == 7) {
      clearInterval(sectionTimer);
      sectionEnd = new Date().getTime() - runStart;
      logSectionData();
      keyListener = 0;
  
      // increment block information before beginning next block
      block++;
      blockType = blockOrder[block - 1];
      blockTrialCount = 1;
      countDown(3);
    }
  
    if (keyListener == 8) { // press button to start task
      keyListener = 0;
      sectionEnd = new Date().getTime() - runStart;
      logSectionData();
      experimentFlow();
      return
    }}