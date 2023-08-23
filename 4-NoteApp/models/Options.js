export class Options {
    constructor() {}

    getIndexOfCards(element) {
        return Array.from(
            element.parentNode.parentNode.parentElement.children
        ).indexOf(element.parentNode.parentNode)
    }

    copyToClipboard() {
        const copyButton = document.querySelectorAll('.copyButton')
        let copyText, indexOfNode

        copyButton.forEach((button) => {
            button.addEventListener('click', () => {
                indexOfNode = this.getIndexOfCards(button)
                copyText = document.querySelectorAll('.textToCopy')[indexOfNode]
                copyText.select()
                copyText.setSelectionRange(0, 99999) /* For mobile devices */
                navigator.clipboard.writeText(copyText.value)
            })
        })
    }

    toggleOptionsCards() {
        const open = document.querySelectorAll('.openOptions')
        const close = document.querySelectorAll('.close-options')
        const mainNav = document.querySelectorAll('.nav-card')
        const optionNav = document.querySelectorAll('.more-options')
        let indexOfNode

        open.forEach((openButton) => {
            openButton.addEventListener('click', () => {
                indexOfNode = this.getIndexOfCards(openButton)
                mainNav[indexOfNode].className = 'nav-card no-show'
                optionNav[indexOfNode].className = 'more-options'
            })
        })

        close.forEach((closeButton) => {
            closeButton.addEventListener('click', () => {
                indexOfNode = this.getIndexOfCards(closeButton)
                optionNav[indexOfNode].className = 'more-options no-show'
                mainNav[indexOfNode].className = 'nav-card'
            })
        })
    }

    changeColor() {
        const colorPalette = document.querySelectorAll('.colors-select')
        const allCards = document.querySelectorAll('.cards')
        const navMoreOptions = document.querySelectorAll('.more-options')
        const navCard = document.querySelectorAll('.nav-card')
        const textArea = document.querySelectorAll('.text-input')
        let indexOfNode, indexColor, childs, childs2
        colorPalette.forEach(color => {
            color.addEventListener('click', () => {
                indexOfNode = this.getIndexOfCards(color.parentNode)
                indexColor = Array.from(color.parentNode.children).indexOf(color)
                allCards[indexOfNode].className = `cards colorMain${indexColor}`
                childs = navMoreOptions[indexOfNode].childNodes
                childs2 = navCard[indexOfNode].childNodes
                for (let i = 0; i < childs.length; i++) {
                    if(i == 1) {
                        childs[1].className = `share color${indexColor}`
                        childs2[1].className = `share color${indexColor}`
                        textArea[indexOfNode].className = `text-input textToCopy scrollColor${indexColor}`
                    }
                    if(i == 3) {
                        childs[3].className = `colors-select-container color${indexColor}`
                        childs2[3].className = `colors-select-container color${indexColor}`
                    }
                    if(i == 5) {
                        childs[5].className = `close-options color${indexColor}`
                        childs2[5].className = `close-options color${indexColor}`
                    }
                }
            })
        })
    }
}
