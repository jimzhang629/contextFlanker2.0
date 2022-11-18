// data logging for sections
// instructions, break screens, etc
function logSectionData(){
  data.push([expStage, sectionType, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, sectionStart, sectionEnd, sectionEnd - sectionStart]);
  console.log(data);
}

// function logAdditionalSingletonTask(){
//   let distractorLocation = (distractionArr[trialCount - 1] == "d") ? distractorLocationArr[trialCount - 1] : NaN;

//   data.push([taskName, sectionType, block, blockLetter, trialCount, blockTrialCount, stimOnset, respOnset, respTime, getAccuracy(acc), targetShape, nonTargetShape, targetLocationArr[trialCount - 1], lineDirectionArr[trialCount - 1], distractionArr[trialCount - 1], distractorLineDirection, distractorLocation, switchRepeatArr[trialCount - 1], sequenceTypeArr[trialCount - 1], sequenceKindArr[trialCount - 1], sequencePositionArr[trialCount - 1], NaN, NaN, NaN]);
//   console.log(data)
// }

function logMainTask(){
  //blockLetter is undefined..
  data.push([taskName, sectionType, block, blockOrder, blockOrder[block], trialCount, blockTrialCount, stimOnset, respOnset, respTime, getAccuracy(acc), locArray[trialCount-1], conArray[trialCount-1], imageSet[trialCount-1].src], repeatLog)
  console.log('block is: ' + block);
}

function logPracticeTask(){
  // let distractorLocation = (distractionArr[trialCount - 1] == "d") ? distractorLocationArr[trialCount - 1] : NaN;

  data.push([taskName, sectionType, NaN, NaN, NaN, trialCount, NaN, stimOnset, respOnset, respTime, getAccuracy(acc), locArray[trialCount-1], conArray[trialCount-1], imageSet[trialCount-1].src]);
}

/** logExpArrays stores the conArray, locArray, and repeatArray (which is actually two arrays)
 * 
 */
function logExpArrays(){
  data.push(NaN, NaN, NaN, ...arguments, locArray, conArray, repeatArray) //add however many NaNs you need to until the end, and attach the arrays
}


