START_GAME_BUTTON.addEventListener('click', () => { startGame(), playSoundtrack() }, false);

QUESTION_1_BUTTON_1.addEventListener('click', openWrongAnswerToQuestion1, false);
QUESTION_1_BUTTON_2.addEventListener('click', openRightAnswerToQuestion1, false);
QUESTION_1_BUTTON_3.addEventListener('click', openWrongAnswerToQuestion1, false);

QUESTION_2_BUTTON_1.addEventListener('click', openRightAnswerToQuestion2, false);
QUESTION_2_BUTTON_2.addEventListener('click', openWrongAnswerToQuestion2, false);

QUESTION_3_BUTTON_1.addEventListener('click', openRightAnswerToQuestion3, false);
QUESTION_3_BUTTON_2.addEventListener('click', openWrongAnswerToQuestion3, false);

QUESTION_4_BUTTON_1.addEventListener('click', openWrongAnswerToQuestion4, false);
QUESTION_4_BUTTON_2.addEventListener('click', openRightAnswerToQuestion4, false);

QUESTION_1_CONTINUE_BUTTON.addEventListener('click', transitionToCanvasStep2, false);
QUESTION_2_CONTINUE_BUTTON.addEventListener('click', transitionToCanvasStep3, false);
QUESTION_3_CONTINUE_BUTTON.addEventListener('click', transitionToCanvasStep4, false);
QUESTION_4_CONTINUE_BUTTON.addEventListener('click', transitionToCanvasStep5, false);