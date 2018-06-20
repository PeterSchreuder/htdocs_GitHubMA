const myQuestion = document.getElementById('myQuestion');
const answerBox = document.getElementById('answerBox');
const resultBox = document.getElementById('resultBox');

let counter = 0;

function init()
{
    resultBox.style.display="none";
    counter=0;
    makeQuestion();
}

init();

function makeQuestion()
{
    myQuestion.innerHTML=quiz[counter].question;
    answerBox.innerHTML="";

    for (i=0; i<quiz[counter].answers.length; i++)
    {
        let li = document.createElement('li');

        li.innerHTML=quiz[counter].answers[i].answer;
        li.innerHTML = quiz[counter].answers[i].answer;

        li.feedback = quiz[0].answers[i].feedback;

        answerBox.appendChild(li);
        li.addEventListener('click',(e)=>{
            console.log(e.target.feedback);

            if(e.target.feedback)
            {
                li.className = "correct";
            }
            else
            {
                li.className = "wrong";
            }
            counter++
        setTimeout(evaluate,2000);
        });
    }
}

function evaluate(evt)
{
    makeQuestion();
}

function finishQuiz()
{
    resultBox.style.display="initial";
}
