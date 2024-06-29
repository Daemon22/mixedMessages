function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const messages = {
    joke: ['', '', ''],
    inspire: ['', '', ''],
    advice: ['', '', ''],
}

let personalMessage = [];

for (let prop in messages) {
    let optionId = generateRandomNumber(messages[prop].length)

    switch(prop) {
        case 'joke':
            personalMessage.push(`${messages[prop][optionId]}`)
            break;
        case 'inspire':
            personalMessage.push(`${messages[prop][optionId]}`)
            break;
        case 'advice':
            personalMessage.push(`${messages[prop][optionId]}`)
            break;
        default:
            personalMessage.push(`Sorry, I cannot help you.`)
    }
}

function formatMessage(message) {
    const formatted = personalMessage.join('\n')
    console.log(formatted)
}

formatMessage(personalMessage);