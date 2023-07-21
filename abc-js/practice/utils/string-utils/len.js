export function len(text) {

    if(typeof text === "undefined"){
        throw Error("argument must be type of string");
    }
    else if(typeof text !== 'string' && typeof text !== 'undefined'){
        throw Error("argument must be type of string");
    }

    console.log(typeof text);
    
    if(text.length === 0){
        return 0;
    }
    else if(text.length === 1){
        return 1;
    }
    else if(text.length > 1){
        return text.length;
    }


}
