var playing = false;
var score;
var action;
var time;
var correctans;
var to = false;

document.getElementById ("start").onclick = function() {

    if (playing) {
        location.reload (); //reload page
        document.getElementById ("score_value").innerHTML = 0;
        playing = false;
        to = false;
    }
    else {
        playing = true;
        score = 0;
        document.getElementById ("score_value").innerHTML = score;
        document.getElementById ("timeremaining").style.display = "block";
        time = 60;
        document.getElementById ("timeremaininingvalue").innerHTML = 60;
        document.getElementById ("start").innerHTML = "Reset Game";
        startcountdown ();
        generateQnA ();
    }

}

function startcountdown () {
    action = setInterval (function() {
        time--;
        document.getElementById ("timeremaininingvalue").innerHTML = time;
        if (time == 0) {
            clearInterval (action);
            document.getElementById ("gameover").style.display = "block";
            document.getElementById ("gameover").innerHTML = "GAME OVER! </br>Your score is: " + score;
            document.getElementById ("timeremaining").style.display = "none";
            document.getElementById ("correct").style.display = "none";
            document.getElementById ("wrong").style.display = "none";
            to = true;
        }
    }, 1000);
}

function generateQnA () {
    var x = Math.round (Math.random ()*9)+1;
    var y = Math.round (Math.random ()*9)+1;
    correctans = x*y;
    var cbox = Math.round (Math.random ()*3)+1;
    document.getElementById ("question").innerHTML = x + "x" + y;
    document.getElementById ("choice" + cbox).innerHTML = correctans;

    for (var i = 1; i < 5; i++) {
        if (i != cbox) {
            var wrongans = (Math.round (Math.random ()*9)+1)*(Math.round (Math.random ()*9)+1);
            while (wrongans == correctans) {
                wrongans = (Math.round (Math.random ()*9)+1)*(Math.round (Math.random ()*9)+1);
            }
            document.getElementById ("choice" + i).innerHTML =wrongans;
        }
    }
}

document.getElementById ("choice1").onclick = function () {

    if (playing && !to) {
        if (this.innerHTML == correctans) {
            score++;
            document.getElementById ("score_value").innerHTML = score;
            document.getElementById ("correct").style.display = "block";
            setTimeout (function (){
                document.getElementById ("correct").style.display = "none";
            }, 1000);
            generateQnA ();
        }
        else {
            document.getElementById ("wrong").style.display = "block";
            setTimeout (function (){
                document.getElementById ("wrong").style.display = "none";
            }, 1000);
        }
    }
}

document.getElementById ("choice2").onclick = function () {

    if (playing && !to) {
        if (this.innerHTML == correctans) {
            score++;
            document.getElementById ("score_value").innerHTML = score;
            document.getElementById ("correct").style.display = "block";
            setTimeout (function (){
                document.getElementById ("correct").style.display = "none";
            }, 1000);
            generateQnA ();
        }
        else {
            document.getElementById ("wrong").style.display = "block";
            setTimeout (function (){
                document.getElementById ("wrong").style.display = "none";
            }, 1000);
        }
    }
}

document.getElementById ("choice3").onclick = function () {

    if (playing && !to) {
        if (this.innerHTML == correctans) {
            score++;
            document.getElementById ("score_value").innerHTML = score;
            document.getElementById ("correct").style.display = "block";
            setTimeout (function (){
                document.getElementById ("correct").style.display = "none";
            }, 1000);
            generateQnA ();
        }
        else {
            document.getElementById ("wrong").style.display = "block";
            setTimeout (function (){
                document.getElementById ("wrong").style.display = "none";
            }, 1000);
        }
    }
}

document.getElementById ("choice4").onclick = function () {

    if (playing && !to) {
        if (this.innerHTML == correctans) {
            score++;
            document.getElementById ("score_value").innerHTML = score;
            document.getElementById ("correct").style.display = "block";
            setTimeout (function (){
                document.getElementById ("correct").style.display = "none";
            }, 1000);
            generateQnA ();
        }
        else {
            document.getElementById ("wrong").style.display = "block";
            setTimeout (function (){
                document.getElementById ("wrong").style.display = "none";
            }, 1000);
        }
    }
}
