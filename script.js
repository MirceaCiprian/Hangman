let word = undefined;
let guessedLetters = 0;
let retryCounter = 10;
let endGame = 0; 

function KeyPressed(value) {
    let found = 0;
    if(!endGame) {
        for(let i = 0; i < word.length; i++) {
            if(word[i] == value) {
                guessedLetters++;
                //reveal current letter
                document.getElementById(i).style = "block";
                found = 1;
            }
        }

        if(!found) {
            retryCounter--;
            document.getElementById("status-game").innerHTML= "Select a letter. Number of tries remaining = " + retryCounter;
            displayBody(retryCounter);
        }
        if(retryCounter == 0) {
            document.getElementById("status-top").innerHTML = "YOU LOSE!";
            document.getElementById("inputDiv").style="display:none";
            document.getElementById("Restart").style="display:block";
            endGame = 1;
        }
        if(guessedLetters == word.length) {
            document.getElementById("status-top").innerHTML = "YOU WON!"
            document.getElementById("inputDiv").style="display:none";
            document.getElementById("Restart").style="display:block";
            endGame = 1;
        }
    }
}

function StartGame() {
    word = document.getElementById("word").value;
    if(word.length != 0) {
        document.getElementById("startBtn").onclick = "none";
        document.getElementById("status-top").innerHTML = "Game started";
        document.getElementById("status-game").innerHTML= "Select a letter. Number of tries remaining = " + retryCounter;
        document.getElementById("hiddenWord").innerHTML = `
        <center>
            <table>
                <tr id="hiddenTable">
                </tr>
            </tabel>
        </center>
        `;
        for (let i = 0; i < word.length;i++) {
            document.getElementById("hiddenTable").innerHTML += ` 
            <td>
            <button type="button" class="button-key" style="display:block">
                <div id="${i}" style="display:none"> 
                    ${word[i]}
                </div>
            </button>
            </td>
            `;
        }
        drawGallow();
    }
}

function drawGallow() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        //Initial figure
        ctx.beginPath();
        ctx.moveTo(300, 400);
        ctx.lineTo(50, 400);
        ctx.moveTo(100, 400);
        ctx.lineTo(100, 50);
        ctx.lineTo(220, 50);
        ctx.lineTo(220, 100);
        ctx.stroke();
        ctx.closePath();
    }
  }

  function displayBody(value) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        switch(value) {
            case 9:
                {
                    ctx.beginPath();
                    ctx.arc(220, 130, 30, 0, Math.PI * 2, true); // Outer circle
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 8:
                {
                    //Body
                    ctx.beginPath();
                    ctx.moveTo(220,160);
                    ctx.lineTo(220,250);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 7:
                {
                    //Left Leg
                    ctx.beginPath();
                    ctx.moveTo(220,250);
                    ctx.lineTo(200,280);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 6:
                {
                    //Right Leg
                    ctx.beginPath();
                    ctx.moveTo(220,250);
                    ctx.lineTo(240,280);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 5:
                {
                    //Left Hand
                    ctx.beginPath();
                    ctx.moveTo(220,170);
                    ctx.lineTo(200,210);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 4:
                {
                    //Right hand
                    ctx.beginPath();
                    ctx.moveTo(220,170);
                    ctx.lineTo(240,210);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 3:
                {
                    ctx.beginPath();
                    ctx.arc(210, 120, 2, 0, Math.PI * 2, true); // Left eye
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 2:
                {
                    ctx.beginPath();
                    ctx.arc(230, 120, 2, 0, Math.PI * 2, true); // Right eye
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 1:
                {
                    ctx.beginPath();
                    ctx.arc(220, 130, 20, 0, Math.PI, false); // Mouth (clockwise)
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
            case 0:
                {
                    //Rope
                    ctx.beginPath();
                    ctx.moveTo(180,160);
                    ctx.lineTo(260,160);
                    ctx.stroke();
                    ctx.closePath();
                    break;
                }
        }
    }
  }

function RestartGame()
{
    window.location.reload();
}