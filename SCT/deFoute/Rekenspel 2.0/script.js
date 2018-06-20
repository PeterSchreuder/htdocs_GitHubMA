const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;
let numSums = 2;

function init(){
  //
    for(i=0;i<4;i++)
    {
      assignments.push(makeSum());
    };
    myAssignment.innerHTML=assignments[counter].numA+" x "+assignments[counter].numB;
}

function inputHandler(evt)
{
    if (evt.keyCode == 13)
    {
        counter++;
        myInput.value="";
        myAssignment.innerHTML=assignments[counter].numA+" x "+assignments[counter].numB;
        console.log("Je toetste: "+" in.");

        if (counter
    }
  //
}

function makeSum(){
  let mySum = {};
  mySum.numA = getNumber();
  mySum.numB = getNumber();
  mySum.ans = mySum.numA * mySum.numB;
  return mySum;
  //
    return getNumber();
}

function evaluate()
{

}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener("keydown", inputHandler)

init();