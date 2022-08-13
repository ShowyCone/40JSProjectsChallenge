let cpuChoice
let userChoice
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const result = document.getElementById('result')
const cpuCards = [
    document.getElementById('rockCpu'),
    document.getElementById('paperCpu'),
    document.getElementById('scissorsCpu')
]

rock.addEventListener('click', () => {
    userChoice = 0
    changeColorUser(rock)
    run()
})
paper.addEventListener('click', () => {
    userChoice = 1
    changeColorUser(paper)
    run()
})
scissors.addEventListener('click', () => {
    userChoice = 2
    changeColorUser(scissors)
    run()
})

function run() {
    cpuChoice = Math.floor(Math.random() * 3) + 0
    if (userChoice === cpuChoice) result.innerText = 'Draw!'

    if (userChoice === 0 && cpuChoice === 2) result.innerText = 'You!'
    if (userChoice === 1 && cpuChoice === 0) result.innerText = 'You!'
    if (userChoice === 2 && cpuChoice === 1) result.innerText = 'You!'

    if (userChoice === 2 && cpuChoice === 0) result.innerText = 'CPU!'
    if (userChoice === 0 && cpuChoice === 1) result.innerText = 'CPU!'
    if (userChoice === 1 && cpuChoice === 2) result.innerText = 'CPU!'

    changeColor(cpuChoice)
}

function changeColorUser(element) {
    rock.removeAttribute('style')
    paper.removeAttribute('style')
    scissors.removeAttribute('style')

    element.style =
        `background-color: #ADD2CA;
    border-top: #BEE3DB solid 5px;
    border-right: #BEE3DB solid 5px;
    border-bottom: #CFF4EB solid 5px;
    border-left: #CFF4EB solid 5px;`
}

function changeColor(i) {
    cpuCards[0].removeAttribute('style')
    cpuCards[1].removeAttribute('style')
    cpuCards[2].removeAttribute('style')

    cpuCards[i].style =
        `background-color: #ADD2CA;
    border-top: #BEE3DB solid 5px;
    border-right: #BEE3DB solid 5px;
    border-bottom: #CFF4EB solid 5px;
    border-left: #CFF4EB solid 5px;`
}