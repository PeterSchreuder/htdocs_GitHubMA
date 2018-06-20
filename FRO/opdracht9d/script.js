const wrapper=document.getElementById('wrapper');
wrapper.innerHTML="Hey hey hey";

let new_array=["P","E","T","E","R"];

function loop()
{
  wrapper.innerHTML="";
    for (let i=0;i<new_array.length;i++)
    {
        let letter=document.createElement("span");
        letter.style.backgroundColor=makeColor();
        letter.style.color=makeColor();
        letter.className="letter";
        letter.innerHTML=new_array[i];
        //letter.innerHTML=makeColor();
        wrapper.appendChild(letter);
    }
}

setInterval(loop,60);

function makeColor()
{
  return "rgb(" + makeNumber() + "," + makeNumber() + "," + makeNumber()+ ")";
}

function makeNumber()
{
    return Math.floor(Math.random()*255);
}
