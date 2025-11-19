
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Přihlášení - funkce ještě není implementována');
      window.location.href = 'dashboard.html';
    });
  }

  if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Registrace - funkce ještě není implementována');
      window.location.href = 'login.html';
    });
  }
});
