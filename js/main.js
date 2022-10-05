"use strict"
let expStage = "main1-1"; //initialize expStage (make sure matches instructions)
let canvas, ctx; //canvas variables
let runStart;
let showNavButtons = false;

// experiment parameters (play around with these)
let networkSize = 10; //don't change without also updating network structure in networkFunctions.js

function startExperiment(){
    //navigateInstructionPath(repeatNecessary);
    runStart = new Date().getTime();
    runInstructions();
}

$(document).ready(function(){
    startExperiment();
})