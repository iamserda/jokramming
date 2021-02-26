const setupTerm = document.getElementById('setupTerminal');
const punTerm = document.getElementById('punTerminal');

const setupBox = document.getElementById('setupBox');
const punBox = document.getElementById('punBox');
const punBtn = document.getElementById('punBtn');
const newBtn = document.getElementById('newBtn');
const randomJokeUrl = 'https://official-joke-api.appspot.com/jokes/programming/random'
let data;

async function fetchJoke(apiUrl) {
    const jokeResponse = await fetch(apiUrl);
    data = await jokeResponse.json();
    displaySetup();
}

function displaySetup() {
    console.log(data);

    const {
        setup
    } = data[0];

    // setupBox.textContent = setup;
    // punBox.textContent = punchline;
    showLetterInSentence(setup, setupBox)

    // setupBox.classList.toggle('hidden');
    //     console.log(setup, punchline)
}

function displayPun() {
    const {
        punchline
    } = data[0];
    showLetterInSentence(punchline, punBox)
}

function showLetterInSentence(sentence, myElem) {
    // const sentence = "Why do fools fall in love?" //test
    let i = 0;
    var timeToLive = (sentence.length) * 100;

    function appendLetter() {
        if (sentence[i] === undefined) {
            sentence[i] = " ";
        }
        myElem.append(sentence[i])
        i++;
        // console.log(sentence[i++])
    }
    const intervalId = setInterval(appendLetter, 100)

    setTimeout(() => {
        clearInterval(intervalId)
    }, timeToLive)
}

function resetAll() {
    setupBox.textContent = ""
    setupBox.className = "setupText"
    setupTerm.className = "terminal container"
    newBtn.className = "rstBtn"

    punBox.textContent = ""
    punTerm.className = "terminal container hidden"
    punBox.className = "punText hidden"
    punBtn.className = "showPun hidden"

    // console.log(setupBox, punBox, punBtn)
}

let counter = 0;

newBtn.addEventListener('click', () => {
    resetAll();
    // show setup
    fetchJoke(randomJokeUrl);
    // hide self
    newBtn.classList.toggle('hidden')
    // show punTerm, punBtn
    punTerm.classList.toggle('hidden');
    punBtn.classList.toggle('hidden')
    console.log(setupBox.textContent, punBox.textContent);
})

punBtn.addEventListener('click', () => {
    // show punchline div
    punBox.classList.toggle('hidden') // display punchline.
    // hide punchline btn

    displayPun();
    punBtn.classList.toggle('hidden')
    // show newJokeButton.
    newBtn.classList.toggle('hidden');
    console.log(setupBox.textContent, punBox.textContent);
})