let accountant = {
    h: 0,
    min: 0,
    s: 0,
    cs: 0,
}

const dom = {
    play: document.getElementById("start"),
    stop: document.getElementById("reset"),
    h: document.getElementById("hours"),
    min: document.getElementById("minutes"),
    s: document.getElementById("seconds"),
    cs: document.getElementById("centiseconds"),
}

let toggleOn = false

dom.play.addEventListener("click", () => {
    toggleOn = !toggleOn
    if (toggleOn) dom.play.innerHTML = 'Pause'
    else dom.play.innerHTML = 'Start'
})

function zeroNumber(num) {
    if (num.toString().length === 1) {
        return "0" + num.toString()
    } else {
        return num.toString()
    }
}

setInterval(() => {
    if (toggleOn) {
        accountant.cs++
        if (accountant.cs >= 99) {
            accountant.cs = 0
            accountant.s++
        }
        if (accountant.s >= 59) {
            accountant.s = 0
            accountant.min++
        }
        if (accountant.min >= 59) {
            accountant.min = 0
            accountant.h++
        }
        dom.cs.innerText = zeroNumber(accountant.cs)
        dom.s.innerText = zeroNumber(accountant.s)
        dom.min.innerText = zeroNumber(accountant.min)
        dom.h.innerText = zeroNumber(accountant.h)
    }
}, 10)

dom.stop.addEventListener("click", () => {
    accountant.h = 0
    accountant.min = 0
    accountant.s = 0
    accountant.cs = 0

    dom.h.innerText = "00"
    dom.min.innerText = "00"
    dom.s.innerText = "00"
    dom.cs.innerText = "00"

    toggleOn = false
    dom.play.innerHTML = 'Start'
})