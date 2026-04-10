const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];

export const generateSequence = (length = 200) => {
    let sequence = [];

    for (let i = 0; i < length; i++) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        sequence.push(randomKey);
    }

    return sequence;
};