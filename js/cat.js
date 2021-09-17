class Cat {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        let spriteCat = new Image();
        spriteCat.src = 'https://i.imgur.com/UEdg4Iu.png';
        let spriteCatLeft = new Image();
        spriteCatLeft.src = 'https://i.imgur.com/5ABxDVN.png';

        this.displayCat1 = function () {
            CTX_1.drawImage(spriteCat, 0, 0, 310, 320, this.x, this.y, 50, 50);
        }
        this.displayCat2 = function () {
            CTX_2.drawImage(spriteCat, 0, 0, 310, 320, this.x, this.y, 50, 50);
        }
        this.displayCat3 = function () {
            CTX_3.drawImage(spriteCat, 0, 0, 310, 320, this.x, this.y, 50, 50);
        }
        this.displayCat4 = function () {
            CTX_4.drawImage(spriteCatLeft, 0, 0, 310, 320, this.x, this.y, 50, 50);
        }
        this.displayCat5 = function () {
            CTX_5.drawImage(spriteCatLeft, 0, 0, 310, 320, this.x, this.y, 50, 50);
        }

        // MOVE TO CHECKPOINT #1
        this.moveToCheckpoint1 = function () {
            // #0 TO #1: (163, 344) > (102, 344)
            while (this.x > 102 && this.y === 344) {
                this.x -= 1;
                break;
            }
            // #1 TO #2: (102 344) > (102, 148)
            while (this.x === 102 && this.y > 148) {
                this.y -= 1;
                break;
            }
            // #2 TO #3: (102 148) > (167, 148)
            while (this.x < 167 && this.y === 148) {
                this.x += 1;
                break;
            }
            // #3 TO #4: (167, 148) > (167, 115)
            while (this.x === 167 && this.y > 115) {
                this.y -= 1;
                break;
            }
            // #4 TO #5: (167, 115) > (200, 115)
            while (this.x < 200 && this.y === 115) {
                this.x += 1;
                break;
            }
            // #5 TO #6: (200, 115) > (200, 80)
            while (this.x === 200 && this.y > 80) {
                this.y -= 1;
                break;
            }
            while (this.x < 202 && this.y === 80) {
                this.x += 1;
                break;
            }
            if (this.x === 202 && this.y === 80) {
                let delayMoveToCheckpoint1 = setTimeout(() => {
                    // #6 TO #7 [CHECKPOINT #1]: (202, 80) > (205, 80)
                    while (this.x < 205 && this.y === 80) {
                        this.x += 1;
                        console.log('CHECKPOINT #1 REACHED');
                        break;
                    }
                }, 10)
            }        
        }

        // MOVE TO CHECKPOINT #2
        this.moveToCheckpoint2 = function () {
            while (this.x < 599 && this.y === 80) {
                this.x += 1;
                if (this.x === 599 && this.y === 80) {
                    console.log('CHECKPOINT #2 REACHED');
                }
                break;
            }
        }

        // MOVE TO CHECKPOINT #3
        this.moveToCheckpoint3 = function () {
            // #8 TO #9: (600, 80) > (600, 112)    
            while (this.x === 600 && this.y < 112) {
                this.y += 1;
                break;
            }
            // #9 TO #10: (600, 112) > (670, 112)
            while (this.x < 670 && this.y === 112) {
                this.x += 1;
                break;
            }
            // #10 TO #11: (670, 112) > (670, 140)
            while (this.x === 670 && this.y < 140) {
                this.y += 1;
                break;
            }
            // #11 TO #12: (670, 140) > (702, 140)
            while (this.x < 702 && this.y === 140) {
                this.x += 1;
                break;
            }
            // #12 TO #13: (702, 140) > (702, 180)            
            while (this.x === 702 && this.y < 180) {
                this.y += 1;
                break;
            }
            // #13 TO #14: (702, 180) > (736, 180)
            while (this.x < 736 && this.y === 180) {
                this.x += 1;
                break;
            }
            // #14 TO #15: (736, 180) > (738, 180)            
            while (this.x < 738 && this.y === 180) {
                this.x += 1;
                break;
            }
            // #15 TO #16: (738, 180) > (738, 309)
            while (this.x === 738 && this.y < 310) {
                this.y += 1;
                if (this.x === 738 && this.y === 310) {
                    console.log('CHECKPOINT #3 REACHED')
                }
                break;
            }
        }

        // MOVE TO CHECKPOINT #4
        this.moveToCheckpoint4 = function () {
            // #16 TO #17: (738, 310) > (707, 310)
            while (this.x > 668 && this.y === 310) {
                this.x -= 1;
                break;
            }
            // #17 TO #18: (707, 310) > (707, 345)
            while (this.x === 668 && this.y < 410) {
                this.y += 1;
                break;
            }
            while (this.x > 635 && this.y === 410) {
                this.x -= 1;
                if (this.x === 635 && this.y === 410) {
                    console.log('CHECKPOINT #4 REACHED');
                }
                break;
            }
        }

        // MOVE TO CHECKPOINT #5
        this.moveToCheckpoint5 = function () {
            while (this.x > 405 && this.y === 410) {
                this.x -= 1;
                break;
            }
            // MOVE TO [FINAL] CHECKPOINT #6 (A)
            while (this.x === 405 && this.y > 380) {
                this.y -= 1;
                break;
            }
            // MOVE TO [FINAL] CHECKPOINT #6 (B)
            if (this.x === 405 && this.y === 380) {
                let delayMoveToFinalCheckpoint = setTimeout(() => {
                    while (this.x === 405 && this.y > 370) {
                        this.y -= 1;
                        break;
                    }
                }, 400)
            }

            if (this.x === 405 && this.y === 410) {
                console.log('CHECKPOINT #5 REACHED');
            }
            if (this.x === 405 && this.y === 360) {
                console.log('FINAL CHECKPOINT REACHED!');
            }
        }
    }
}