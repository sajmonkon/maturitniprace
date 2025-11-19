document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.top-nav a');

  function setActiveByKey(key) {
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.key === key));
  }

  const stored = localStorage.getItem('activeNav');
  if (stored) {
    setActiveByKey(stored);
  } else {
 
    const path = window.location.pathname.split('/').pop();
    if (!path || path === 'index.html') {
      setActiveByKey('home');
    } else {
      navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === path) a.classList.add('active');
      });
    }
  }

  navLinks.forEach(a => {
    a.addEventListener('click', function (e) {
      const key = this.dataset.key || this.getAttribute('href');
      localStorage.setItem('activeNav', key);
      navLinks.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
