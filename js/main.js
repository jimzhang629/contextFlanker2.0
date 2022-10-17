// This file runs the experiment and declares all global variables

"use strict"
let expStage = "main1-1"; //initialize expStage (make sure matches instructions)
let canvas, ctx; //canvas variables
let showNavButtons = false;
let data=[], taskName, trialCount, blockTrialCount, acc, accCount, stimOnset, respOnset, respTime, block, partResp, runStart, legalIllegalArray = [], trialType, taskSet; //variables for data logging
let sectionStart, sectionEnd, sectionType, sectionTimer; //for logging non experimental sections (instruction and break screens)

// experiment parameters (play around with these)
let networkSize = 10; //don't change without also updating network structure in networkFunctions.js

// global instruction iterator information. Change as needed
let instructions = {
    // contains the interator for each instruction block
    iterator: {
      "main1-1": 1, "main1-2": 1, "main2": 1, "main3": 1, "main4": 1,"prac5": 1, "main6": 1, "main7": 1, "final": 1
    },
    // contains the max value of each instruction iteration. iteration will STOP at max.
    max: {
      "main1-1": 4, "main1-2": 7, "main2": 6, "main3": 4, "main4": 8,"prac5": 6, "main6": 6, "main7": 5,"final": 1
    },
    // what does instruction section end with?
    // #nextSectionButton, #startExpButton, keyPressNextSection, keyPressStartTask
    exitResponse: {
      "main1-1": '#nextSectionButton',
      "main1-2": '#startExpButton',
      "main2": 'keyPressStartTask',
      "main3": 'keyPressStartTask',
      "main4": '#startExpButton',
      "prac5": 'keyPressStartTask',
      "main6": 'keyPressStartTask',
      "main7": 'keyPressStartTask',
      "final": 'keyPressStartTask'
    }
  };
let iterateAgain = false, task;

function startExperiment(){
    //navigateInstructionPath(repeatNecessary);
    runStart = new Date().getTime();
    runInstructions();
}

$(document).ready(function(){
    startExperiment();
})