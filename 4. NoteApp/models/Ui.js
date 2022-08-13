export class UI {
    constructor() {}

    toggle = true

    showCards(callback) {
        const addButton = document.getElementById('addButton')
        const mainContainer = document.getElementById('mainContainer')
        const cardsDom = document.querySelectorAll('.cards')
        const navCar = document.querySelectorAll('.nav-card')
        const moreOption = document.querySelectorAll('.more-options')
        let cardIndex
        let firstClone = cardsDom[0].cloneNode(true)
        let cloneCard
        addButton.addEventListener('click', () => {
            cloneCard = firstClone.cloneNode(true)
            mainContainer.appendChild(cloneCard)
            callback()
        })
    }

    deleteCard() {
        const deleteButton = document.getElementById('deleteCard')
        const allCards = document.querySelectorAll('.delete-button')
        allCards.forEach(cardReset => {
            cardReset.className = 'delete-button delete-disabled'
        })
        deleteButton.children[0].className = 'fa-solid fa-trash-can'
        deleteButton.addEventListener('click', () => {
            allCards.forEach(card => {
                if (this.toggle) {
                    card.className = 'delete-button'
                    deleteButton.children[0].className = 'fa-solid fa-xmark'
                } else if (!this.toggle) {
                    card.className = 'delete-button delete-disabled'
                    deleteButton.children[0].className = 'fa-solid fa-trash-can'
                }
            })
            this.toggle = !this.toggle
        })
    }
}
