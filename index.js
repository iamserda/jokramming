const setupTerm = document.getElementById('setupTerminal');
const punTerm = document.getElementById('punTerminal');

const setupBox = document.getElementById('setupBox');
const punBox = document.getElementById('punBox');
const punBtn = document.getElementById('punBtn');
const newBtn = document.getElementById('newBtn');
const randomJokeUrl = 'https://official-joke-api.appspot.com/jokes/programming/random'

async function fetchJoke(apiUrl) {
    const jokeResponse = await fetch(apiUrl);
    const data = await jokeResponse.json();

    displayMyJoke(data);
}

function displayMyJoke(jsonData) {
    console.log(jsonData);

    const {
        setup,
        punchline
    } = jsonData[0];
    setupBox.textContent = setup;
    punBox.textContent = punchline;
    setupBox.classList.toggle('hidden');
    //     console.log(setup, punchline)
}

function resetAll() {
    setupBox.textContent = ""
    punBox.textContent = ""
    punTerm.className = "terminal container hidden"
    setupBox.className = "setupText hidden"
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
        // show punBtn
    punTerm.classList.toggle('hidden');
    punBtn.classList.toggle('hidden')
        // console.log(setupBox, punBox)
})

punBtn.addEventListener('click', () => {
    // show punchline div
    punBox.classList.toggle('hidden') // display punchline.
        // hide punchline btn
    punBtn.classList.toggle('hidden') // remove it.

    // show newJokeButton.
    newBtn.classList.toggle('hidden'); //adds it.
    console.log(setupBox, punBox)
})