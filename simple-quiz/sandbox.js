const form = document.querySelector('form');
const scoreEle = document.getElementById('score');

form.addEventListener('submit', e => {
    e.preventDefault();

    const answers = ['A','B','B','A','A'];
    const testAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    let score = 0;

    testAnswers.forEach((answer, index) => {
        if(answer === answers[index]){
            score += 20;
        }
    });

    scrollTo(0,0);
    scoreEle.style.display = 'block';

    let output = 0;
    const timer = setInterval(() => {
        scoreEle.children[1].textContent = output + '%';
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
});