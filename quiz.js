const quizData = [
  {
    question: "What is phishing?",
    options: ["A security patch", "A type of malware", "A social engineering attack", "A firewall"],
    answer: "A social engineering attack"
  },
  {
    question: "What should you do when you receive a suspicious email?",
    options: ["Click the link", "Reply back", "Report and delete", "Forward it to friends"],
    answer: "Report and delete"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").innerText = q.question;
  const options = document.querySelectorAll(".option");
  options.forEach((el, index) => {
    el.innerText = q.options[index];
    el.onclick = () => {
      if (el.innerText === q.answer) score++;
      current++;
      if (current < quizData.length) {
        loadQuestion();
      } else {
        document.getElementById("quiz-box").innerHTML = `<h2>Score: ${score}/${quizData.length}</h2>`;
      }
    };
  });
}
window.onload = loadQuestion;