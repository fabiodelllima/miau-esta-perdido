// TO START GAME
function startGame() {
    closeStartGameBox();
    closeStartGameButtonWrapper();
    openContainerCanvas();    
    setInterval(canvaStep1, 6);
}
function closeStartGameBox() {
    START_GAME_BOX.style.display = 'none';
}
function closeStartGameButtonWrapper() {
    START_GAME_BUTTON_WRAPPER.style.display = 'none';
}
function openContainerCanvas() {
    CANVAS_CONTAINER.style.display = 'block';
    STEP_1_CANVAS.style.display = 'block';
}

// TO PLAY SOUNDTRACK
function playSoundtrack() {    
    SOUNDTRACK.play();
}
function stopSoundtrack() {
    SOUNDTRACK.pause();
}
function playVictorySound() {
    VICTORY_SOUND.play();
}

// TO OPEN QUESTIONS
function openQuestion1() {
    QUESTION_1_BOX.style.display = 'block';
}
function openQuestion2() {
    QUESTION_2_BOX.style.display = 'block';
}
function openQuestion3() {
    QUESTION_3_BOX.style.display = 'block';
}
function openQuestion4() {
    QUESTION_4_BOX.style.display = 'block';
}

// TO OPEN RIGHT ANSWER NOTIFICATION DIVS
function openRightAnswerToQuestion1() {
    QUESTION_1_BOX.style.display = 'none';
    let delayRightAnswer1 = setTimeout(() => {
        QUESTION_1_RIGHT_ANSWER_BOX.style.display = 'block';
    }, 300);
}
function openRightAnswerToQuestion2() {
    QUESTION_2_BOX.style.display = 'none';
    let delayRightAnswer2 = setTimeout(() => {
        QUESTION_2_RIGHT_ANSWER_BOX.style.display = 'block';
    }, 300);
}
function openRightAnswerToQuestion3() {
    QUESTION_3_BOX.style.display = 'none';
    let delayRightAnswer3 = setTimeout(() => {
        QUESTION_3_RIGHT_ANSWER_BOX.style.display = 'block';
    }, 300);
}
function openRightAnswerToQuestion4() {
    QUESTION_4_BOX.style.display = 'none';
    let delayRightAnswer4 = setTimeout(() => {
        QUESTION_4_RIGHT_ANSWER_BOX.style.display = 'block';
    }, 300);
}

// TO OPEN WRONG ANSWER NOTIFICATION
function openWrongAnswerToQuestion1() {
    QUESTION_1_WRONG_ANSWER_BOX.style.display = 'block';
    let closeWrongAnswerBox = setTimeout(() => { 
        QUESTION_1_WRONG_ANSWER_BOX.style.display = 'none';
    }, 1200);
}
function openWrongAnswerToQuestion2() {
    QUESTION_2_WRONG_ANSWER_BOX.style.display = 'block';
    let closeWrongAnswerBox = setTimeout(() => { 
        QUESTION_2_WRONG_ANSWER_BOX.style.display = 'none';
    }, 1200);
}
function openWrongAnswerToQuestion3() {
    QUESTION_3_WRONG_ANSWER_BOX.style.display = 'block';
    let closeWrongAnswerBox = setTimeout(() => { 
        QUESTION_3_WRONG_ANSWER_BOX.style.display = 'none';
    }, 1200);
}
function openWrongAnswerToQuestion4() {
    QUESTION_4_WRONG_ANSWER_BOX.style.display = 'block';
    let closeWrongAnswerBox = setTimeout(() => { 
        QUESTION_4_WRONG_ANSWER_BOX.style.display = 'none';
    }, 1200);
}

// BUTTONS CLICKS TO NEXT STEPS ON CANVAS
function transitionToCanvasStep2() {
    QUESTION_1_RIGHT_ANSWER_BOX.style.display = 'none';
    STEP_1_CANVAS.style.display = 'none';
    STEP_2_CANVAS.style.display = 'block';
    setInterval(canvaStep2, 6);
}
function transitionToCanvasStep3() {
    QUESTION_2_RIGHT_ANSWER_BOX.style.display = 'none';
    STEP_2_CANVAS.style.display = 'none';
    STEP_3_CANVAS.style.display = 'block';
    setInterval(canvaStep3, 6);
}
function transitionToCanvasStep4() {
    QUESTION_3_RIGHT_ANSWER_BOX.style.display = 'none';
    STEP_3_CANVAS.style.display = 'none';
    STEP_4_CANVAS.style.display = 'block';
    setInterval(canvaStep4, 6);
}
function transitionToCanvasStep5() {
    QUESTION_4_RIGHT_ANSWER_BOX.style.display = 'none';
    STEP_4_CANVAS.style.display = 'none';
    STEP_5_CANVAS.style.display = 'block';
    setInterval(canvaStep5, 6);
}

function openVictoryNotification() {
    VICTORY_NOTIFICATION.style.display = 'block';
}
