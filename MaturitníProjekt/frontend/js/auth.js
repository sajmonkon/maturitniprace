document.getElementById("registerForm")?.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost/projekt/backend/auth.php", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({action:"register", username, email, password})
    });

    const data = await res.json();
    document.getElementById("message").innerText = data.message;
});


