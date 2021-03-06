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

    console.log(data[0])
    displaySetup();

}

function displaySetup() {


    const {
        setup
    } = data[0];
    console.log(setup);
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
    console.log(punchline);
    showLetterInSentence(punchline, punBox)
}

function showLetterInSentence(sentence, myElem) {
    // const sentence = "Why do fools fall in love?" //test
    sentence = sentence + "  ";
    let i = 0;
    var timeToLive = (sentence.length) * 100;

    function appendLetter() {
        myElem.append(sentence[i++])
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