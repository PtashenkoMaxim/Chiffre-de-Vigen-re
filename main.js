class Algoritm {
    constructor(word, key) {
        this.word = word;
        this.key = key;
      }

    EncDecode(isEncode){
        const alphavit = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя "
        const numAlph = {}
        for( let i = 0; i < alphavit.length; i++){
            numAlph[alphavit[i]] = i;
        }
        let code = '';
        if (isEncode == true) {
            for(let i = 0; i < this.word.length; i++){
                code += alphavit[(numAlph[this.word[i]]+numAlph[this.key[i%this.key.length]])%alphavit.length];
            }
            return code;
        } else {
            let code = '';
            for(let i = 0; i < this.word.length; i++){
            code += alphavit[(numAlph[this.word[i]]-numAlph[this.key[i%this.key.length]]+alphavit.length)%alphavit.length];
            }
            return code;
        }
    }
}

function Encode(){
    let text = document.getElementById("word").value;
    let key = document.getElementById("key").value;
    const result = new Algoritm(text, key)
    let code = result.EncDecode(true);
    alert(code);
}
function Decode(){
    let text = document.getElementById("deword").value;
    let key =document.getElementById("dekey").value;
    const result = new Algoritm(text, key)
    let code = result.EncDecode(false);
    alert(code);
}

