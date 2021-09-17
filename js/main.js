const CAT_1 = new Cat(163, 344);
const CAT_2 = new Cat(206, 80);
const CAT_3 = new Cat(600, 80);
const CAT_4 = new Cat(738, 310);
const CAT_5 = new Cat(635, 410);

function canvaStep1() {
    clearCanvas1();
    CAT_1.displayCat1();

    if (CAT_1.displayCat1) {
        let delayMove1 = setTimeout(() => {
            CAT_1.moveToCheckpoint1();
        }, 1000);
    }

    if (CAT_1.x === 202 && CAT_1.y === 80) {
        let delayQuestion1 = setTimeout(() => {
            openQuestion1();
        }, 50);
    }
}

function canvaStep2() {
    clearCanvas2()
    CAT_2.displayCat2();
    CAT_2.moveToCheckpoint2();

    if (CAT_2.x === 597 && CAT_2.y === 80) {
        let delayQuestion2 = setTimeout(() => {
            openQuestion2();
        }, 700);
    }
}

function canvaStep3() {
    clearCanvas3();
    CAT_3.displayCat3();
    CAT_3.moveToCheckpoint3();

    if (CAT_3.x === 738 && CAT_3.y === 308) {
        let delayQuestion3 = setTimeout(() => {
            openQuestion3();
        }, 700);
    }
}

function canvaStep4() {
    clearCanvas4();
    CAT_4.displayCat4();
    CAT_4.moveToCheckpoint4();

    if (CAT_4.x === 668 && CAT_4.y === 400) {
        let delayQuestion4 = setTimeout(() => {
            openQuestion4();
        }, 700);
    }
}

function canvaStep5() {
    clearCanvas5();
    CAT_5.displayCat5();
    CAT_5.moveToCheckpoint5();

    if (CAT_5.x === 405 && CAT_5.y === 380) {
        let delaystopSoundtrack = setTimeout(() => { stopSoundtrack() }, 500);
        let delayVictorySound = setTimeout(() => { playVictorySound() }, 600);
        let delayVictoryNotification = setTimeout(() => { openVictoryNotification() }, 600);
    }
}