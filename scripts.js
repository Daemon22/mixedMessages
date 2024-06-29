function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const messages = {
    joke: ['I told my wife she should embrace her mistakes. She gave me a hug.', 'The past, present, and future walk into a bar. It was tense.', 'I used to play piano by ear, but now I use my hands.'],
    inspire: ['It takes courage to grow up and become who you really are.', 'Your self-worth is determined by you.', 'Attitude is a little thing that makes a big difference.'],
    advice: ['Listen more than you speak.', 'Your life is your responsibility.', 'Everyone is afraid.'],
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