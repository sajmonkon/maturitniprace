async function loadQuizzes(){
    const res = await fetch("../backend/quizzes.php");
    const quizzes = await res.json();
    const ul = document.getElementById("quizList");
    quizzes.forEach(q=>{
        const li = document.createElement("li");
        li.innerHTML = `<strong>${q.title}</strong>: ${q.description} 
                        <a href="quiz.html?quiz_id=${q.id}">Spustit kvíz</a>`;
        ul.appendChild(li);
    });
}

loadQuizzes();
