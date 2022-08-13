import { UI } from './models/Ui.js'
import { Options } from './models/Options.js'

function main(repeat) {
    const ui = new UI()
    const options = new Options()
    ui.deleteCard()
    options.copyToClipboard()
    options.toggleOptionsCards()
    options.changeColor()
    if (repeat)
        ui.showCards(() => main(false))
}

main(true)
