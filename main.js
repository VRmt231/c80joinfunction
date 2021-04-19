inputs=[];
function makePara(){

for(var i=1; i<=6;i++){
inputs.push(document.getElementById("sentence_"+i).value);
inputs.join(". ");
document.getElementById("ShowParagraph1").innerHTML = inputs.join(". ");
console.log(inputs);
}

    }
