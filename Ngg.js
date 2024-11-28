let result1 = document.querySelector('#result');
let result2 = document.querySelector('#result2');
let result3 = document.querySelector('#result3');
let guesscounter = document.querySelector('#guesscounter');
let streakcounter = document.querySelector('#streakcounter');
let streak = 0;
streakcounter.innerHTML = ' ' + streak;
let scorecounter = document.querySelector('#scorecounter');
let score = 0;
scorecounter.innerHTML = ' ' + score;
let resultimage = document.querySelector('#result');
let input = document.getElementById('guess');

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});

function generate() {
    computerchoice = Math.floor(Math.random() * 1000 + 0);
    attempts = 0;
    attemptalert = document.querySelector('#nomoreattempts');
    attemptalert.style.display = 'block';
    numberofattempts = document.querySelector('#attemptcounter');
    numberofattempts.innerHTML = ' ' + attempts + '/15';
    h4 = document.querySelector('#status');
    h4.innerHTML = 'Try To Guess The Whole Number Between 0 And 1000.';
    h4.style.fontSize = '21px';
    let guesscounter = document.querySelector('#guesscounter');
    guesscounter.innerHTML = ' ';
    let newgamebutton = document.querySelector('#other');
    newgamebutton.style.display = 'none';
    let inputarea = document.querySelector('#guess');
    inputarea.style.display = 'inline';
    let submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'inline';
    let giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'inline';
    attemptalert = document.querySelector('#nomoreattempts');
    attemptalert.innerHTML = 'You Have A Maximum Of 15 Attempts ';
    attemptalert.style.backgroundColor = 'orange';
    attemptalert.style.color = 'navy';
    let statusimage = document.querySelector('#result');
    statusimage.style.backgroundImage =
        "url('https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_960_720.png')";
    result1.style.marginTop = '-10px';
    result2.style.marginTop = '-10px';
    result3.style.marginTop = '-10px';
}
function check() {
    let guess = document.querySelector('#guess').value;
    if (attempts > 13 && guess !== computerchoice) {
        streak = 0;
        streakcounter.innerHTML = ' ' + streak;
        attemptalert = document.querySelector('#nomoreattempts');
        attemptalert.innerHTML =
            'You Ran Out Of Attempts. The Number Was ' +
            computerchoice +
            '. Try Another Number.';
        attemptalert.style.backgroundColor = 'red';
        attemptalert.style.color = 'white';
        let newgamebutton = document.querySelector('#other');
        newgamebutton.style.display = 'block';
        let inputarea = document.querySelector('#guess');
        inputarea.style.display = 'none';
        let submitbutton = document.querySelector('#submit');
        submitbutton.style.display = 'none';
        let giveupbutton = document.querySelector('#giveup');
        giveupbutton.style.display = 'none';
    }
    if (guess == '') {
        h4.innerHTML = 'Type A Guess In The Box Below';
    } else {
        if (computerchoice == guess) {
            attemptalert.style.display = 'none';
            result1.style.marginTop = '75px';
            result2.style.marginTop = '75px';
            result3.style.marginTop = '75px';
            h4.innerHTML =
                'Well Done. You Correctly Guessed That The Number Was ' +
                computerchoice +
                '. Try Another Number.';
            document.querySelector('#scorecounter');
            let guesscounter = document.querySelector('#guesscounter');
            guesscounter.innerHTML += ' ' + guess;
            score++;
            streak++;
            scorecounter.innerHTML = ' ' + score;
            streakcounter.innerHTML = ' ' + streak;
            let inputarea = document.querySelector('#guess');
            inputarea.style.display = 'none';
            let statusimage = document.querySelector('#result');
            statusimage.style.backgroundImage =
                "url('https://www.publicdomainpictures.net/pictures/80000/velka/winners-trophy-clip-art.jpg')";
            let submitbutton = document.querySelector('#submit');
            submitbutton.style.display = 'none';
            let giveupbutton = document.querySelector('#giveup');
            giveupbutton.style.display = 'none';
            let newgamebutton = document.querySelector('#other');
            newgamebutton.style.display = 'block';
        } else if (guess < computerchoice && guess >= 0) {
            h4.innerHTML = 'Too Low...Guess Higher';
            attempts += 1;
            numberofattempts.innerHTML = ' ' + attempts + '/15';
            let statusimage = document.querySelector('#result');
            statusimage.style.backgroundImage =
                "url('https://cdn.pixabay.com/photo/2020/04/12/19/05/yellow-5035413_960_720.png')";
            let guesscounter = document.querySelector('#guesscounter');
            guesscounter.innerHTML += ' ' + guess + ',';
        } else if (guess > computerchoice && guess <= 1000) {
            h4.innerHTML = 'Too High...Guess Lower!';
            attempts += 1;
            numberofattempts.innerHTML = ' ' + attempts + '/15';
            let statusimage = document.querySelector('#result');
            statusimage.style.backgroundImage =
                "url('https://cdn.pixabay.com/photo/2019/05/27/23/45/plane-4234024_960_720.png')";
            let guesscounter = document.querySelector('#guesscounter');
            guesscounter.innerHTML += ' ' + guess + ',';
        }
    }
}
function reveal() {
    if (attempts == 0) {
        streak = 0;
        streakcounter.innerHTML = ' ' + streak;
        h4.innerHTML =
            'Did You Give Up? You Did Not Make Any Attempt To Guess The Number. Anyway, The Number Was ' +
            computerchoice +
            '. Try Another Number.';
        attemptalert.style.display = 'none';
        result1.style.marginTop = '75px';
        result2.style.marginTop = '75px';
        result3.style.marginTop = '75px';
        h4.style.fontSize = '16px';
        let statusimage = document.querySelector('#result');
        statusimage.style.backgroundImage =
            "url('https://cdn.pixabay.com/photo/2017/08/15/12/58/emoticon-2643814_960_720.jpg')";
        let newgamebutton = document.querySelector('#other');
        newgamebutton.style.display = 'block';
        let inputarea = document.querySelector('#guess');
        inputarea.style.display = 'none';
        let submitbutton = document.querySelector('#submit');
        submitbutton.style.display = 'none';
        let giveupbutton = document.querySelector('#giveup');
        giveupbutton.style.display = 'none';
    } else if (attempts > 0) {
        h4.innerHTML =
            'Did You Give Up? You Onlu Used ' +
            attempts +
            ' Of Your Attempts. Anyway, The Number Was ' +
            computerchoice +
            ' Try Another Number.';
        h4.style.fontSize = '16px';
        attemptalert.style.display = 'none';
        result1.style.marginTop = '75px';
        result2.style.marginTop = '75px';
        result3.style.marginTop = '75px';
        let statusimage = document.querySelector('#result');
        statusimage.style.backgroundImage =
            "url('https://cdn.pixabay.com/photo/2017/08/15/12/58/emoticon-2643814_960_720.jpg')";
        let newgamebutton = document.querySelector('#other');
        newgamebutton.style.display = 'block';
        let inputarea = document.querySelector('#guess');
        inputarea.style.display = 'none';
        let submitbutton = document.querySelector('#submit');
        submitbutton.style.display = 'none';
        let giveupbutton = document.querySelector('#giveup');
        giveupbutton.style.display = 'none';
    }
}