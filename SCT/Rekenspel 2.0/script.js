const mijnOpgave = document.getElementById('mijnOpgave');
const mijnAntwoord = document.getElementById('mijnAntwoord');
const feedback = document.getElementById('feedback');

let mySummen = [];
let counter = 0;


for (let i=0; i<10; i++)
{
    let mySum = {};
    mySum.getalA = maakGetal();
    mySum.getalB = maakGetal();
    mySum.goedeAntwoord = mySum.getalA * mySum.getalB;
    mySummen.push(mySum);
}

//mijnAntwoord.autofocus;
feedback.style.display="none";
mijnOpgave.innerHTML = mySummen[0].getalA + " x " + mySummen[0].getalB;

function invoer(event)
{
    if (event.keyCode == 13)
    {
        mySummen[counter].mijnAntwoord = mijnAntwoord.value;
        mijnAntwoord.value = "";
        counter++;
        //console.log(mySummen);
        if (counter >= mySummen.length)
        {
            eindeSpel();
        }
        else
        {
            mijnOpgave.innerHTML = mySummen[counter].getalA + " x " + mySummen[counter].getalB;
        }
    }
}




function eindeSpel()
{
    console.log(mySummen);
    mijnOpgave.style.display="none";
    mijnAntwoord.style.display="none";
    feedback.style.display="block";
    //Tabel
    let mijnTabel = document.createElement('table');
    mijnTabel.setAttribute('border','1');
    for (let i=0; i<mySummen.length; i++)
    {
        let row = mijnTabel.insertRow();

        if (mySummen[i].goedeAntwoord == mySummen[i].mijnAntwoord)
        {
            row.className = "Goed";
        }
        else
        {
            row.className = "Fout";
        }

        let cell1 = row.insertCell();
        cell1.innerHTML = "De som: " + mySummen[i].getalA + " x " + mySummen[i].getalB + " = " + mySummen[i].goedeAntwoord;
        let cell2 = row.insertCell();
        cell2.innerHTML = "Jouw antwoord: " + mySummen[i].mijnAntwoord;
    }
    feedback.appendChild(mijnTabel);


}

// mySummen[counter].mijnAntwoord = "Hoi";
// console.log(mySummen);
// console.log(mySummen[counter]);

function maakGetal() {
    let mijnGetal = Math.floor(Math.random() * 9) + 1;
    return mijnGetal;
}

mijnAntwoord.addEventListener('keydown',invoer,false);
