// parameters:
// text => the string containing the html 

export function useDOMParser(text){
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.querySelector("body");
}