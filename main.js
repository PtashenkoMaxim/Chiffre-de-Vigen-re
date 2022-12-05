const alphavit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numAlph = {}

for( let i = 0; i < alphavit.length; i++){
    numAlph[alphavit[i]] = i;
}

function Encode(){
    let text = document.getElementById("word").value;
    let key = document.getElementById("key").value;
    let code = '';
    for(let i = 0; i < text.length; i++){
        code += alphavit[(numAlph[text[i]]+numAlph[key[i%key.length]])%alphavit.length];
    }
    alert(code);
}
function Decode(){
    let text = document.getElementById("deword").value;
    let key =document.getElementById("dekey").value;

    let code = '';
    for(let i = 0; i < text.length; i++){
    code += alphavit[(numAlph[text[i]]-numAlph[key[i%key.length]]+alphavit.length)%alphavit.length];
    }
    alert(code);
}
неужели понял