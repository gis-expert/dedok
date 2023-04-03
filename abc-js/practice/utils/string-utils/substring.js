import { len } from "./len.js";
export function substring(text, start, end) {
    if (typeof text !== 'string') throw Error ('argument must be type of string');
    if (start === undefined && end === undefined) {
        return text;
    }
    end = end ?? len(text);
    if (typeof start !== 'number') throw Error ('invalid start index');
    if (typeof end !== 'number') throw Error ('invalid end index');
    if ( start % 1 !== 0) throw Error ('invalid start index');
    if ( end % 1 !== 0) throw Error ('invalid end index');
    if (start < 0) throw Error ('invalid start index');
    if (end < 0) throw Error ('invalid end index');
    if (end > len(text)) throw Error ('invalid end index');
    if (start > end) throw Error ('invalid start and end index');
    let aim = "";
    for ( let i = start; i < end; i ++) {
        aim += text[i];
    }
return aim;
}
