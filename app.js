 const questions = [{
        'que':'Which of thw following is a mark up language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'In which year JavaScript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'None of the above',
        'correct':'b'
    },
    {
        'que':'Whar does CSS stand for?',
        'a':'Hyper Text Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicopters Terminals Motorboats Lamborginis',
        'correct':'b'
    },
    {
        'que':'Which tag is used to create a hyperlink in HTML?',
        'a':'<link>',
        'b':'<href>',
        'c':'<a>',
        'd':'<hyper>',
        'correct':'c',
    },
    {
        'que':'What is the correct HTML element for inserting a line break?',
        'a':'<break>',
        'b':'<br>',
        'c':'<lb>',
        'd':'<newline>',
        'correct':'b',
    },
    {
        'que':'Which is the correct syntax for linking a CSS file to an HTML file?',
        'a':'<stylesheet>style.css</stylesheet>',
        'b':'style src="style.css"',
        'c':'<link rel="stylesheet" href="style.css">',
        'd':'<css>style.css</css>',
        'correct':'c',
    },
    {
        'que':'How do you make text bold in CSS',
        'a':'font-weight: bold;',
        'b':'text-style: bold;',
        'c':'font: bold;',
        'd':'text-weight: bold;',
        'correct':'a',
    },
    {
        'que':'Which function is used to display data in the browser console?',
        'a':'alert()',
        'b':'log.console()',
        'c':'console.log()',
        'd':'display()',
        'correct':'c',
    },
    {
        'que':'Which operator is used to assign a value to a variable',
        'a':'-',
        'b':'*',
        'c':'=',
        'd':'==',
        'correct':'c',
    },
    {
        'que':'How do you declare a variable in JavaScript?',
        'a':'v myVar;',
        'b':'dim myVar;',
        'c':'let myVar;',
        'd':'var: myVar;',
        'correct':'c',
    }
 ]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion =()=> {
    if(index === total) {
        return endQuiz()
    }
    reset(); // Reset the options before loading the next question
    const data=questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data=questions[index];
    const ans = getAnswer();   
    if(ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer=input.value;
            }
            else {
                return "no";
            }
        }
    )
    return answer;
}
const reset=() => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = 
        `<h3>Thank You for Playing Quiz</h3>
        <h2>${right} / ${total} are correct</h2>`;
}
loadQuestion();