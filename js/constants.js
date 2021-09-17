const STEP_1_CANVAS = document.getElementById('step-one-canvas');
const STEP_2_CANVAS = document.getElementById('step-two-canvas');
const STEP_3_CANVAS = document.getElementById('step-three-canvas');
const STEP_4_CANVAS = document.getElementById('step-four-canvas');
const STEP_5_CANVAS = document.getElementById('step-five-canvas');

const CTX_1 = STEP_1_CANVAS.getContext('2d');
const CTX_2 = STEP_2_CANVAS.getContext('2d');
const CTX_3 = STEP_3_CANVAS.getContext('2d');
const CTX_4 = STEP_4_CANVAS.getContext('2d');
const CTX_5 = STEP_5_CANVAS.getContext('2d');

const START_GAME_BUTTON = document.getElementById('start-game-button');
const START_GAME_BUTTON_WRAPPER = document.getElementById('start-game-wrapper');

const CANVAS_CONTAINER = document.getElementById('canvas-container');
const START_GAME_BOX = document.getElementById('start-game-container');
const TROPHIES_BOX = document.getElementById('trophies-box');

const QUESTION_1_BOX = document.getElementById('question-box-one');
const QUESTION_2_BOX = document.getElementById('question-box-two');
const QUESTION_3_BOX = document.getElementById('question-box-three');
const QUESTION_4_BOX = document.getElementById('question-box-four');

const QUESTION_1_BUTTON_1 = document.getElementById('question-one-button-one');
const QUESTION_1_BUTTON_2 = document.getElementById('question-one-button-two');
const QUESTION_1_BUTTON_3 = document.getElementById('question-one-button-three');

const QUESTION_2_BUTTON_1 = document.getElementById('question-two-button-one');
const QUESTION_2_BUTTON_2 = document.getElementById('question-two-button-two');

const QUESTION_3_BUTTON_1 = document.getElementById('question-three-button-one');
const QUESTION_3_BUTTON_2 = document.getElementById('question-three-button-two');

const QUESTION_4_BUTTON_1 = document.getElementById('question-four-button-one');
const QUESTION_4_BUTTON_2 = document.getElementById('question-four-button-two');

const QUESTION_1_RIGHT_ANSWER_BOX = document.getElementById('right-answer-box-one');
const QUESTION_2_RIGHT_ANSWER_BOX = document.getElementById('right-answer-box-two');
const QUESTION_3_RIGHT_ANSWER_BOX = document.getElementById('right-answer-box-three');
const QUESTION_4_RIGHT_ANSWER_BOX = document.getElementById('right-answer-box-four');

const QUESTION_1_WRONG_ANSWER_BOX = document.getElementById('wrong-answer-notification-one');
const QUESTION_2_WRONG_ANSWER_BOX = document.getElementById('wrong-answer-notification-two');
const QUESTION_3_WRONG_ANSWER_BOX = document.getElementById('wrong-answer-notification-three');
const QUESTION_4_WRONG_ANSWER_BOX = document.getElementById('wrong-answer-notification-four');

const QUESTION_1_CONTINUE_BUTTON = document.getElementById('continue-button-one');
const QUESTION_2_CONTINUE_BUTTON = document.getElementById('continue-button-two');
const QUESTION_3_CONTINUE_BUTTON = document.getElementById('continue-button-three');
const QUESTION_4_CONTINUE_BUTTON = document.getElementById('continue-button-four');

const VICTORY_NOTIFICATION = document.getElementById('victory-notification');

const SOUNDTRACK = document.getElementById('soundtrack');
const VICTORY_SOUND = document.getElementById('victory-sound');