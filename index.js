const jsConfetti = new JSConfetti();

const correctAnswers = ["D", "B", "A", "B", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
            questions[index].classList.add("correct");
        }else{
            questions[index].classList.add("wrong");
        }
    })
    scrollTo(0,0);
    result.querySelector("p").textContent = `You scored: ${score}/5!`;
    result.classList.remove("hide");

    if (score === 5) {
        jsConfetti.addConfetti({
            particleCount: 200,
            spread: 70,
            origin: {
                x: 0.5,
                y: 0.5, 
            }
        });
    }
});