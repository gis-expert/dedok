export function len(text) {
    console.log('len Active')   
    console.log(`text: ${text}`)
    if (typeof text !== 'string') throw Error ('argument must be type of string')
    if(text.length === undefined) throw Error ('argument must be type of string')
    let textCount = 0
    for(let i = 0; i < 10000; i++){
        if(text[i] === undefined) return textCount
        textCount += 1; 
    }
}

