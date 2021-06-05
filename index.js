let DocuCrypt=function(text,key){
function encode(string) {
    var number = "";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}
function DocuCryptXOR(text, key) {
    return String.raw`${Array.from(
        text,
        (c, i) => String.fromCharCode(c.charCodeAt() ^ key.charCodeAt(i % key.length))
    ).join('')}`;
}
return DocuCryptXOR(text,encode(key))
}